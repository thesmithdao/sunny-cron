import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 3000;

app.post("/", async (req: Request, res: Response) => {
  // TODO: Call sunny-agent /api/mentions endpoint here
  console.log("Triggering sunny-agent mentions endpoint...");
  // Example: Use fetch or axios to POST to sunny-agent
  res.json({ success: true, message: "Mentions cron triggered!" });
});

app.listen(port, () => {
  console.log(`Mentions cron server listening on port ${port}`);
});
