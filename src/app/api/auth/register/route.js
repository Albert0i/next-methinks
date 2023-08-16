import { NextResponse } from "next/server"
import connectMongoDB from "@/config/mongoDB"
import User from "@/models/user"
import bcryptjs from 'bcryptjs'

// Register new user
export async function POST(req) {
    const reqBody = await req.json()
    const { username, password, email } = reqBody
    await connectMongoDB()

    try {
        //const user = await User.findOne({ $and:[ { username }, { email } ]}).select('_id').lean()
        const user = await User.findOne({ username }).select('_id').lean()
        
        if (!user) {
            const salt = bcryptjs.genSaltSync(10);
            const hashedPassword = bcryptjs.hashSync(password, salt);            
            const result = await User.create({ username, password: hashedPassword, email });
            return NextResponse.json({ success: true, id: result._id }, { status: 201 });
        } else {
            return NextResponse.json({ success: false, message: 'username has been taken up' }, { status: 400 });
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