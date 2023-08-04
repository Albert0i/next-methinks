import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const searchParams = req.nextUrl.searchParams  

  console.log('params=', params)
  console.log('searchParams=', searchParams)

  return NextResponse.json({success: true}, { status: 200 }) 
}

/*
   http://localhost:3000/test/api/12345?bldcod=LK&blocod=01
*/
