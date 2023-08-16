import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        uniqued: [true, 'username has been taken up'],
        uppercase: true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: [6, 'password must be 6 characters or more']
    },
    email: {
        type: String, 
        validate: { 
            validator: function(str) {
                if (str) 
                    return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(str)
                else 
                    return true
            },
            message: props => `'${props.value}' is not a valid email address`    
        }
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
   Mongoose's find method with $or condition does not work properly
   https://stackoverflow.com/questions/7382207/mongooses-find-method-with-or-condition-does-not-work-properly

   Mongoose | Custom Validators
   https://mongoosejs.com/docs/validation.html

   How to Validate Unique Emails with Mongoose
   https://masteringjs.io/tutorials/mongoose/mongoose-validate-unique-email   

   JavaScript Email Validation
   https://www.w3schools.blog/email-validation-javascript-js
*/