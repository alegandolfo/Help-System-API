import { IsEmail, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class inputCreateReply {
  @IsNotEmpty()
  @IsEmail()
  userEmail!: string

  @IsNotEmpty()
  @IsMongoId()
  postId!: string

  @IsNotEmpty()
  @IsString()
  content!: string

  @IsOptional()
  @IsMongoId()
  replyTo?: string

  constructor (userEmail: string, postId: string, content: string, replyTo?: string) {
    this.userEmail = userEmail
    this.postId = postId
    this.content = content
    this.replyTo = replyTo
  }
}