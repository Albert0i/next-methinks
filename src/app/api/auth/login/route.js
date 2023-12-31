import { NextResponse } from "next/server"
import connectMongoDB from "@/config/mongoDB"
import User from "@/models/user"
import bcryptjs from 'bcryptjs'

// Login a user
export async function POST(req) {
    const reqBody = await req.json()
    const { username, password } = reqBody
    await connectMongoDB()

    try {
        const user = await User.findOne({ username }).select('_id username password isAdmin').lean()
        
        if (user) {
            if (bcryptjs.compareSync(password, user.password))
                return NextResponse.json({ success: true, user }, { status: 200 });
            else 
                return NextResponse.json({ success: false, message: 'username or password not correct' }, { status: 400 });
        } else {
            return NextResponse.json({ success: false, message: 'username does not exist' }, { status: 400 });
        }
    }
    catch (error) {
        let errors = {}
        if (error.errors) {
            Object.keys(error.errors).forEach((key) => {
                errors[key] = error.errors[key].message;
            })
            return NextResponse.json({success: false, errors}, { status: 400 })
        }            
        else
            return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }    
}