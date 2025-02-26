import { ReplyCreationFailed, ReplyNotFound } from '../model/errors'
import { ReplyEntity } from '../model/ReplyEntity'
import { ReplyRepository } from '../repository/ReplyRepository'
import ReplySchema from '../schema/ReplySchema'
import { ErrorObj } from '../utils/errorObj'

export class ReplyService implements ReplyRepository {

  async createReply (userEmail: string, postId: string, content: string, replyTo?: string): Promise<ReplyEntity|ErrorObj> {
    let newReply = new ReplySchema({
        userEmail: userEmail,
        postId: postId,
        content: content,
        replyTo: replyTo
    })
    await newReply.save()

    if (newReply == null) return ReplyCreationFailed

    const reply = new ReplyEntity(userEmail, postId, content)
    return reply
}

  async getReply (_id: string): Promise<ReplyEntity|ErrorObj> {
     let replyData = await ReplySchema.findOne({_id: _id})
     if (replyData == null) return ReplyNotFound

     if (replyData.replyTo === null) replyData.replyTo = undefined
     const reply = new ReplyEntity(replyData.userEmail, replyData.postId, replyData.content, replyData.replyTo, replyData.createdAt, replyData.updatedAt)
     return reply
 }

 async updateReply (_id: string, content?: string): Promise<ReplyEntity|ErrorObj> {
    let updatedReply = await ReplySchema.findOne({_id: _id})
    if (updatedReply == null) return ReplyNotFound
    if (content != null) updatedReply.content = content
    await updatedReply.save()

    if (updatedReply.replyTo === null) updatedReply.replyTo = undefined
    const reply = new ReplyEntity(updatedReply.userEmail, updatedReply.postId, updatedReply.content, updatedReply.replyTo, updatedReply.createdAt, updatedReply.updatedAt)
    return reply
}
 
 async deleteReply (_id: string): Promise<boolean|ErrorObj> {
    let reply = await ReplySchema.findOne({_id: _id})
    if (reply == null) return ReplyNotFound

    await ReplySchema.deleteOne({_id: _id})
    return true
 }

 async validateReply(_id: string): Promise<boolean> {
  const replyExists = await ReplySchema.findOne({_id: _id})

  if (replyExists == null) return false
  return true
 }
}