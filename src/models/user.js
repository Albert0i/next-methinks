import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        uniqued: [true, 'username has been taken up']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: [6, 'password must be 3 characters or more']
    },
    email: { 
        type: String,
        required: true,
        match: [/.+\@.+\..+/, 'email is not valid'],
        unique: [true, 'email has been taken up']
      }
    })

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User

/*
   How to Validate Unique Emails with Mongoose
   https://masteringjs.io/tutorials/mongoose/mongoose-validate-unique-email
*/