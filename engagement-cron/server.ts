import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 3000;

app.post("/", async (req: Request, res: Response) => {
  // TODO: Call sunny-agent /api/engagement endpoint here
  console.log("Triggering sunny-agent engagement endpoint...");
  // Example: Use fetch or axios to POST to sunny-agent
  res.json({ success: true, message: "Engagement cron triggered!" });
});

app.listen(port, () => {
  console.log(`Engagement cron server listening on port ${port}`);
});
