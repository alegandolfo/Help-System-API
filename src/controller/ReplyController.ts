import { validate } from 'class-validator';
import { ReplyEntity } from '../model/ReplyEntity';
import { ErrorObj } from '../utils/errorObj';
import { inputCreateReply } from './inputs/replies/inputCreateReply';
import { inputGetReply } from './inputs/replies/inputGetReply';
import { inputDeleteReply } from './inputs/replies/inputDeleteReply';
import { inputUpdateReply } from './inputs/replies/inputUpdateReply';
import { InvalidPostData, InvalidReplyData, PostNotFound, ReplyNotFound, UserNotFound } from '../model/errors';
import { UserService } from '../service/UserService';
import { ReplyService } from '../service/ReplyService';
import { PostService } from '../service/PostService';
import { inputListReplies } from './inputs/replies/inputListReplies';

let replyService:ReplyService = new ReplyService()

export class ReplyController {
  async createReply(userEmail: string, postId: string, content: string, replyTo: string): Promise<ReplyEntity|ErrorObj>{

    let validatedInput = await validate(new inputCreateReply(userEmail, postId, content, replyTo)).then(errors => {
      if (errors.length > 0) return errors
      else return null
    })
    if (validatedInput != null) return new ErrorObj(InvalidReplyData.code, InvalidReplyData.message, InvalidReplyData.httpCode, validatedInput)

    let userService:UserService = new UserService()
    let userExists = await userService.validateUser(userEmail)
    if (!userExists) return UserNotFound

    let postService:PostService = new PostService()
    let postExists = await postService.validatePost(postId)
    if (!postExists) return PostNotFound

    if (replyTo) {
      let replyExists = await replyService.validateReply(replyTo)
      if (!replyExists) return ReplyNotFound
    }

    let reply = await replyService.createReply(userEmail, postId, content, replyTo)
    return reply
  }
  
  async getReply(_id: string): Promise<ReplyEntity|ErrorObj>{

    let validatedInput = await validate(new inputGetReply(_id)).then(errors => {
      if (errors.length > 0) return errors
      else return null
    })

    if (validatedInput != null) return new ErrorObj(InvalidReplyData.code, InvalidReplyData.message, InvalidReplyData.httpCode, validatedInput)

    let reply = await replyService.getReply(_id)
    return reply
  }

  async updateReply(_id: string, content: string): Promise<ReplyEntity|ErrorObj>{

    let validatedInput = await validate(new inputUpdateReply(_id, content)).then(errors => {
      if (errors.length > 0) return errors
      else return null
    })

    if (validatedInput != null) return new ErrorObj(InvalidReplyData.code, InvalidReplyData.message, InvalidReplyData.httpCode, validatedInput)

    let reply = await replyService.updateReply(_id, content)
    return reply
  }

  async deleteReply(_id: string): Promise<boolean|ErrorObj>{

    let validatedInput = await validate(new inputDeleteReply(_id)).then(errors => {
      if (errors.length > 0) return errors
      else return null
    })

    if (validatedInput != null) return new ErrorObj(InvalidReplyData.code, InvalidReplyData.message, InvalidReplyData.httpCode, validatedInput)

    let reply = await replyService.deleteReply(_id)
    return reply
  }

  async listReplies(postId: string): Promise<ReplyEntity[]|ErrorObj>{
    let validatedInput = await validate(new inputListReplies(postId)).then(errors => {
      if (errors.length > 0) return errors
      else return null
    })

    if (validatedInput != null) return new ErrorObj(InvalidPostData.code, InvalidPostData.message, InvalidPostData.httpCode, validatedInput)

    let posts = await replyService.listReplies(postId)
    return posts
  }
}