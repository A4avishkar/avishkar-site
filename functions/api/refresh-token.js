export async function onRequest(context) {
    const { request, env } = context;
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    // Temporarily allow all methods to debug if POST is being converted to GET
    const method = request.method;
    // For debugging: Allow GET to check if the function is alive and has env vars
    if (method === 'GET') {
        return new Response(JSON.stringify({ 
            message: 'Refresh Token Function is ALIVE', 
            hasClientId: !!env.CLIENT_ID,
            hasClientSecret: !!env.CLIENT_SECRET,
            envKeys: Object.keys(env)
        }), { status: 200, headers });
    }
    
    if (method === 'OPTIONS') {
        return new Response(null, { status: 200, headers });
    }

    try {
        let body;
        try {
            body = await request.json();
        } catch (e) {
            return new Response(JSON.stringify({ error: 'Body is not valid JSON', details: e.message, method }), { status: 400, headers });
        }
        
        const { refresh_token } = body;

        if (!refresh_token) {
            return new Response(JSON.stringify({ error: 'Missing refresh_token', method }), { status: 400, headers });
        }

        const client_id = env.CLIENT_ID;
        const client_secret = env.CLIENT_SECRET;

        if (!client_id || !client_secret) {
            return new Response(JSON.stringify({ error: 'CONFIG_ERROR: CLIENT_ID or CLIENT_SECRET missing in env', method }), { status: 500, headers });
        }

        const params = new URLSearchParams();
        params.append('client_id', client_id);
        params.append('client_secret', client_secret);
        params.append('refresh_token', refresh_token);
        params.append('grant_type', 'refresh_token');

        const response = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString()
        });

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: response.status,
            headers
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'UNEXPECTED_EXCEPTION', message: error.message, method }), { status: 500, headers });
    }
}
