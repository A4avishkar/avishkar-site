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
    
    if (method === 'OPTIONS') {
        return new Response(null, { status: 200, headers });
    }

    try {
        const body = await request.json();
        const { code, code_verifier, redirect_uri } = body;

        if (!code || !code_verifier || !redirect_uri) {
            return new Response(JSON.stringify({ error: 'Missing parameters', received: Object.keys(body) }), { status: 400, headers });
        }

        const client_id = env.CLIENT_ID;
        const client_secret = env.CLIENT_SECRET;

        if (!client_id || !client_secret) {
            return new Response(JSON.stringify({ error: 'Server configuration error: CLIENT_ID or CLIENT_SECRET not set in Cloudflare' }), { status: 500, headers });
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

        return new Response(JSON.stringify(data), {
            status: response.status,
            headers
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message, method: method }), { status: 500, headers });
    }
}
