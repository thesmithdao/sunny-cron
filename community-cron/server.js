const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const SUNNY_AGENT_URL = process.env.SUNNY_AGENT_URL;
const CRON_SECRET = process.env.CRON_SECRET || "";

if (!SUNNY_AGENT_URL)
  console.warn(
    "SUNNY_AGENT_URL not set; set SUNNY_AGENT_URL env var in Railway"
  );

app.post("/", async (req, res) => {
  try {
    const url = `${SUNNY_AGENT_URL}/api/community`;
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CRON_SECRET}`,
      },
      body: JSON.stringify({}),
    });

    const text = await resp.text();
    console.log(`/api/community ->`, resp.status, text);
    return res
      .status(200)
      .json({ success: true, status: resp.status, body: text });
  } catch (err) {
    console.error("Error triggering /api/community:", err);
    return res.status(500).json({ success: false, error: String(err) });
  }
});

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.listen(port, () =>
  console.log(`community-cron trigger listening on ${port}`)
);
