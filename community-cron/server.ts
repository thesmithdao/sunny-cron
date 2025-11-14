import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 3000;

app.post("/", async (req: Request, res: Response) => {
  // TODO: Call sunny-agent /api/community endpoint here
  console.log("Triggering sunny-agent community endpoint...");
  // Example: Use fetch or axios to POST to sunny-agent
  res.json({ success: true, message: "Community cron triggered!" });
});

app.listen(port, () => {
  console.log(`Community cron server listening on port ${port}`);
});
