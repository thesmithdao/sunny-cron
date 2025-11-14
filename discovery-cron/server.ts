import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 3000;

app.post("/", async (req: Request, res: Response) => {
  console.log("Triggering sunny-agent discovery endpoint...");
  // No-op: runtime uses the compiled JS `server.js` which performs the POST.
  res.json({ success: true, message: "Discovery cron triggered!" });
});

app.listen(port, () => {
  console.log(`Discovery cron server listening on port ${port}`);
});
