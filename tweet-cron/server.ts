import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 3000;

app.post("/", async (req: Request, res: Response) => {
  // TODO: Call sunny-agent /api/tweet endpoint here
  console.log("Triggering sunny-agent tweet endpoint...");
  // Example: Use fetch or axios to POST to sunny-agent
  res.json({ success: true, message: "Tweet cron triggered!" });
});

app.listen(port, () => {
  console.log(`Tweet cron server listening on port ${port}`);
});
