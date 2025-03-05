import { ReplyEntity } from "../model/ReplyEntity"
import { ErrorObj } from "../utils/errorObj"

export interface ReplyRepository {
    createReply(userEmail: string, postId: string, content: string, replyTo?: string): Promise<ReplyEntity|ErrorObj>
    getReply(_id: string): Promise<ReplyEntity|ErrorObj>
    updateReply(_id: string, content?: string): Promise<ReplyEntity|ErrorObj>
    deleteReply(_id: string): Promise<boolean|ErrorObj>
    validateReply(_id: string): Promise<boolean>
    listReplies(postId: string): Promise<ReplyEntity[]|ErrorObj>
}