import { IsMongoId, IsNotEmpty } from "class-validator"

export class inputListReplies {
  @IsNotEmpty()
  @IsMongoId()
  postId!: string

  constructor (postId: string) {
    this.postId = postId
  }
}