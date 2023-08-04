import mongoose, { Schema } from "mongoose";
import MongooseDelete from 'mongoose-delete'

const postSchema = new Schema(
  {
    title: { 
      type: String, 
      required: [true, 'title is required' ], 
      minlength: [3, 'title must be 3 characters or more']      
    },
    subtitle: String, 
    author: { 
      type: String, 
      required: [true, 'author is required'] 
    }, 
    content: { 
      type: String, 
      required: [true, 'content is required'], 
      minlength: [12, 'content must be 12 characters or more'] 
    },
  },
  {
    timestamps: true,
  }
);

// Save time of deletion
postSchema.plugin(MongooseDelete, { deletedAt : true });
// Index only specific fields
postSchema.plugin(MongooseDelete, { indexFields: ['deleted', 'deletedAt'] });

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;

/*
   mongoose-delete
   https://www.npmjs.com/package/mongoose-delete
*/