import { NextResponse } from 'next/server';

export async function GET() {
  const now = new Date()
  return NextResponse.json({ ok: true, now });
}

/*
   NextJS | Cron Jobs
   https://vercel.com/docs/cron-jobs
*/