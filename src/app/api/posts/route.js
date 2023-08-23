import { NextResponse } from "next/server";
import connectMongoDB from "@/config/mongoDB";
import Post from "@/models/post"

// Get all posts
export async function GET(req) {
  const searchParams = req.nextUrl.searchParams 
  const searchText = searchParams.get('_st')
  const page = searchParams.get('_page') || 0
  const perPage = searchParams.get('_limit') || 9999
  
  await connectMongoDB()

  try {
    let posts = null
    if (searchText)
      posts = await Post.find({ 
                                deleted: false, 
                                content: {$regex: searchText, $options: 'i'}
                              })
                                .select({content:0, deleted:0, __v:0})
                                .sort({ createdAt: -1 })
                                .lean()
    else 
      posts = await Post.find({deleted: false})
                                .select({content:0, deleted:0, __v:0})
                                .limit(perPage)
                                .skip(perPage * page)
                                .sort({ createdAt: -1 })
                                .lean()
    
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

// Number of posts 
export async function OPTIONS(req) {
  await connectMongoDB();

  try {
    const count = await Post.find({deleted: false}).count()
    return NextResponse.json({ success: true, count }, { status: 200 });
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

   How to find a substring in a field in Mongodb
   https://stackoverflow.com/questions/10242501/how-to-find-a-substring-in-a-field-in-mongodb

   How to get all the values that contains part of a string using mongoose find?
   https://stackoverflow.com/questions/26814456/how-to-get-all-the-values-that-contains-part-of-a-string-using-mongoose-find

   How to paginate with Mongoose in Node.js?
   https://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js

   HTTP request methods
   https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
*/