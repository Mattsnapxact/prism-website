// app/api/submit-lead/route.js
//
// Receives the Estate Intelligence Check lead payload (posted by
// public/check.html) and forwards it to the Google Apps Script Web App,
// which appends a row to the leads spreadsheet and emails the brief.
//
// Setup: set LEADS_WEBHOOK_URL in Vercel -> Settings -> Environment
// Variables, to the Apps Script "Web app" URL (ends in /exec). Redeploy
// after adding or changing it.

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("submit-lead: LEADS_WEBHOOK_URL is not set.");
    // Still respond ok — a missing/broken backend should never break the
    // visitor's experience on the page itself.
    return Response.json({ ok: false, error: "not_configured" }, { status: 200 });
  }

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow", // Apps Script web apps redirect to their real execution URL
    });
  } catch (err) {
    console.error("submit-lead: forwarding to the Apps Script webhook failed.", err);
  }

  return Response.json({ ok: true });
}
