// netlify/functions/quizSignup.js

export async function handler(event) {
  // 1) Basic CORS (so the browser is allowed to call this)
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
    "Content-Type": "application/json",
  };

  // 2) Browser “preflight” requests (super common)
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // 3) Let GET show something helpful (so you don’t see Method Not Allowed)
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true, message: "quizSignup function is live. Use POST to submit." }),
    };
  }

  // 4) Only allow POST for real submissions
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ ok: false, error: "Method Not Allowed" }),
    };
  }

  try {
    const { email, name, result } = JSON.parse(event.body || "{}");

    if (!email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ ok: false, error: "Missing email" }),
      };
    }

    // 5) Forward to Make (server-to-server, no CORS issues)
    const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL; // set this in Netlify env vars
    if (!makeWebhookUrl) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ ok: false, error: "Missing MAKE_WEBHOOK_URL env var" }),
      };
    }

    const resp = await fetch(makeWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, result }),
    });

    if (!resp.ok) {
      const text = await resp.text();
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ ok: false, error: "Make webhook failed", details: text }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ ok: false, error: err.message || "Unknown error" }),
    };
  }
}
