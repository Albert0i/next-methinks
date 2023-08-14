import { NextResponse } from 'next/server';

export async function GET() {
  const now = new Date()
  
  return NextResponse.json({ ok: true, now })
}

/*
   NextJS | Cron Jobs
   https://vercel.com/docs/cron-jobs

  vercel.json
  {
    "crons": [
      {
        "path": "/api/cron",
        "schedule": "0 * * * *"
      }
    ]
  }

   ┌───────────── minute (0 - 59)
   │ ┌───────────── hour (0 - 23)
   │ │ ┌───────────── day of the month (1 - 31)
   │ │ │ ┌───────────── month (1 - 12)
   │ │ │ │ ┌───────────── day of the week (0 - 6) (0 is Sunday, 6 is Saturday)
   │ │ │ │ │
   │ │ │ │ │
   │ │ │ │ │
   * * * * *
*/