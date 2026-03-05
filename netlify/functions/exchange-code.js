exports.handler = async (event, context) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
    }

    try {
        const body = JSON.parse(event.body);
        const { code, code_verifier, redirect_uri } = body;

        if (!code || !code_verifier || !redirect_uri) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Missing parameters', received: Object.keys(body) })
            };
        }

        const client_id = process.env.CLIENT_ID;
        const client_secret = process.env.CLIENT_SECRET;

        if (!client_id || !client_secret) {
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ error: 'Server configuration error: CLIENT_ID or CLIENT_SECRET not set in Netlify' })
            };
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

        return {
            statusCode: response.status,
            headers,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message })
        };
    }
};
