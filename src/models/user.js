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
        minlength: [6, 'password must be 6 characters or more']
    },
    email: { 
        type: String,
        required: [false, 'email is required'], 
        match: [/.+\@.+\..+/, 'email is not valid'],
        uniqued: [false, 'uemail has been taken up']
      },
    isAdmin: {
        type: Boolean,
        default: false
      }
    },
    { 
        timestamps: true
    })

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User

/*
   How to Validate Unique Emails with Mongoose
   https://masteringjs.io/tutorials/mongoose/mongoose-validate-unique-email

   Mongoose's find method with $or condition does not work properly
   https://stackoverflow.com/questions/7382207/mongooses-find-method-with-or-condition-does-not-work-properly
*/