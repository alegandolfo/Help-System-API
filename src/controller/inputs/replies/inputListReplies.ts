import { IsEmail, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class inputListReplies {
  @IsNotEmpty()
  @IsMongoId()
  postId!: string

  constructor (postId: string) {
    this.postId = postId
  }
}