export async function onRequest(context) {
    const { request, env } = context;
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    const method = request.method;
    
    if (method === 'OPTIONS') {
        return new Response(null, { status: 200, headers });
    }

    // For debugging: Reachability check
    if (method === 'GET') {
        return new Response(JSON.stringify({ 
            message: 'Exchange Code Function is ONLINE', 
            method: method,
            hasEnv: (!!env.CLIENT_ID && !!env.CLIENT_SECRET)
        }), { status: 200, headers });
    }

    try {
        if (method !== 'POST') {
             return new Response(JSON.stringify({ error: 'Please use POST', actualMethod: method }), { status: 400, headers });
        }

        const body = await request.json().catch(() => null);
        if (!body) {
            return new Response(JSON.stringify({ error: 'Body is empty or not JSON', method }), { status: 400, headers });
        }

        const { code, code_verifier, redirect_uri } = body;
        const client_id = env.CLIENT_ID;
        const client_secret = env.CLIENT_SECRET;

        if (!client_id || !client_secret) {
            return new Response(JSON.stringify({ error: 'ENV_MISSING' }), { status: 500, headers });
        }

        const params = new URLSearchParams();
        params.append('client_id', client_id);
        params.append('client_secret', client_secret);
        params.append('code', code);
        params.append('code_verifier', code_verifier);
        params.append('redirect_uri', redirect_uri);
        params.append('grant_type', 'authorization_code');

        const response = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString()
        });

        const data = await response.json();
        return new Response(JSON.stringify(data), { status: response.status, headers });

    } catch (e) {
        return new Response(JSON.stringify({ error: 'CRASH', msg: e.message, method }), { status: 500, headers });
    }
}
