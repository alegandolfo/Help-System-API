import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    sector: {
      type: String,
      required: true
    },
    createdAt: {},
    updatedAt: {}
  }, {
    timestamps: true
  }
)

const Post = mongoose.model('post', PostSchema)

export default Post