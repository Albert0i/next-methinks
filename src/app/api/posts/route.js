import { NextResponse } from "next/server";
import connectMongoDB from "@/config/mongoDB";
import Post from "@/models/post"

// Get all posts
export async function GET() {
  await connectMongoDB()

  try {
    const posts = await Post.find().select({content:0}).sort({ createdAt: -1 }).lean()
    return NextResponse.json({ success: true, posts }, { status: 200 });  
  } 
  catch (error) {
    let errors = {}
    Object.keys(error.errors).forEach((key) => {
      errors[key] = error.errors[key].message;
    })
    return NextResponse.json({success: false, errors}, { status: 400 }) 
  }
}

// Create new post
export async function POST(req) {
  const reqBody = await req.json()  
  const { title, subtitle, author, content } = reqBody;
  await connectMongoDB();

  try {
    const result = await Post.create({ title, subtitle, author, content });
    return NextResponse.json({ success: true, id: result._id }, { status: 201 });
  }
  catch (error) {
    let errors = {}
    Object.keys(error.errors).forEach((key) => {
      errors[key] = error.errors[key].message;
    })
    return NextResponse.json({success: false, errors}, { status: 400 }) 
  }
}

/*
   Improve mongoose validation error handling
   https://stackoverflow.com/questions/61056021/improve-mongoose-validation-error-handling

   Mongoose 
   https://mongoosejs.com/docs/index.html
*/