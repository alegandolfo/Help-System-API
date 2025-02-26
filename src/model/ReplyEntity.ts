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

  getId(): string|undefined {
    return this._id
  }

  getUserEmail(): string {
    return this.userEmail
  }

  getPostId(): string {
    return this.postId
  }

  getContent(): string {
    return this.content
  }

  getReplyTo(): string|undefined {
    return this.replyTo
  }

  getCreatedAt(): Date|undefined {
    return this.createdAt
  }

  getUpdatedAt(): Date|undefined {
    return this.updatedAt
  }
}