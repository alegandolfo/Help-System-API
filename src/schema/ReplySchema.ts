import mongoose from 'mongoose';

const ReplySchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true
    },
    postId: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    replyTo: {
      type: String
    },
    createdAt: {},
    updatedAt: {}
  }, {
    timestamps: true
  }
)

const Reply = mongoose.model('reply', ReplySchema)

export default Reply