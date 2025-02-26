import { IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class inputUpdateReply {
  @IsNotEmpty()
  @IsMongoId()
  _id!: string

  @IsOptional()
  @IsString()
  content?: string

  constructor (_id: string, content?: string) {
    this._id = _id
    this.content = content
  }
}