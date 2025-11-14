import express, { Request, Response } from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.post('/cron', async (req: Request, res: Response) => {
  console.log('Cron triggered!');
  res.json({ success: true, message: 'Cron ran!' });
});

app.listen(port, () => {
  console.log();
});
