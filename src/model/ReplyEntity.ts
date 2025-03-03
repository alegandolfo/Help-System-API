import { SectorTypes } from "./SectorTypes"

export class ReplyEntity {
  _id?: string
  userEmail: string
  postId: string
  content: string
  replyTo?: string
  createdAt?: Date
  updatedAt?: Date

  constructor (userEmail: string, postId: string, content: string, _id?: string, replyTo?: string, createdAt?: Date, updatedAt?: Date) {
    this.userEmail = userEmail
    this.postId = postId
    this.content = content
    this._id = _id
    this.replyTo = replyTo
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}