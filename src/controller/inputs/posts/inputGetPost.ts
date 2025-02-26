import { IsMongoId, IsNotEmpty } from "class-validator"

export class inputGetPost {
  @IsNotEmpty()
  @IsMongoId()
  _id!: string

  constructor (_id: string) {
      this._id = _id
  }
}