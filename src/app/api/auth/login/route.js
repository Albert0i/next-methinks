import { NextResponse } from "next/server";

export async function POST(req) {
    const reqBody = await req.json()  
    const { username, password } = reqBody;

    NextResponse.set('token', 123456)
    return NextResponse.json({success: true}, { status: 200 })
  }