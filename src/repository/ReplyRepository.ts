import { ReplyEntity } from "../model/ReplyEntity"
import { ErrorObj } from "../utils/errorObj"

export interface ReplyRepository {
    createReply(userEmail: string, postId: string, content: string, replyTo?: string): Promise<ReplyEntity|ErrorObj>              // Change input to inputCreateReply
    getReply(_id: string): Promise<ReplyEntity|ErrorObj>
    updateReply(_id: string, content?: string): Promise<ReplyEntity|ErrorObj>                                   // Change input to inputUpdateReply
    deleteReply(_id: string): Promise<boolean|ErrorObj>
    validateReply(_id: string): Promise<boolean>
}