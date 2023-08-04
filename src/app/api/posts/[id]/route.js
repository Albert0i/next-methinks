import { NextResponse } from "next/server";
import connectMongoDB from "@/config/mongoDB";
import Post from "@/models/post"

// Get a post
export async function GET( req, { params} ) {
  const { id } = params;
  //const searchParams = req.nextUrl.searchParams  
  
  await connectMongoDB();
  try {
    // const post = await Post.findOne({ _id: id })
    //                         .select({deleted:0, __v:0})
    //                         .lean();
    const post = await Post.findOne({
                                    "id" : { "$eq": id },
                                    "deleted" : { "$eq": false }})
                            .select({deleted:0, __v:0})
                            .lean();
    return NextResponse.json({ success: post!==null, post }, { status: 200 });
  } 
  catch (error) {
    let errors = {}
    Object.keys(error.errors).forEach((key) => {
      errors[key] = error.errors[key].message;
    })
    return NextResponse.json({success: false, errors}, { status: 400 }) 
  }  
}

// Update post
export async function PUT(req, { params }) {  
  const { id } = params;
  const reqBody = await req.json()  
  const { title, subtitle, author, content } = reqBody;
  //const searchParams = req.nextUrl.searchParams
  
  await connectMongoDB();
  try { 
    const result = await Post.findByIdAndUpdate(id, { title, subtitle, author, content });
    if (result)
      return NextResponse.json({ success:true, id: result._id }, { status: 200 });  
    else 
      return NextResponse.json({ success:false, id: null }, { status: 200 });  
  }
  catch (error) {
    let errors = {}
    Object.keys(error.errors).forEach((key) => {
      errors[key] = error.errors[key].message;
    })
    return NextResponse.json({success: false, errors}, { status: 400 }) 
  }
}

// Delete post 
export async function DELETE(req, { params }) {
  const { id } = params;
  //const searchParams = req.nextUrl.searchParams  

  await connectMongoDB();
  try { 
    // Hard delete 
    //const result = await Post.findByIdAndDelete(id);
    // Soft delete
    const post = await Post.findById(id)
    const result = await post.delete()

    if (result)
      return NextResponse.json({ success: true, id: result._id }, { status: 200 });
    else 
      return NextResponse.json({ success: false, id: null }, { status: 200 });
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
    http://localhost:3000/api/posts/123456?bldcod=LK&blocod=01

    GET( req, { params} ) {
    const searchParams = req.nextUrl.searchParams
    params.id
    searchParams.get('bldcod')
    searchParams.get('blocod')
*/
/*
   MongoDB query with multiple conditions
   https://stackoverflow.com/questions/39389823/mongodb-query-with-multiple-conditions
*/