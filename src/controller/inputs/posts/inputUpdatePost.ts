import { IsIn, IsMongoId, IsNotEmpty, IsString } from "class-validator"
import { SectorTypes } from "../../../model/SectorTypes"

export class inputUpdatePost {
  @IsNotEmpty()
  @IsMongoId()
  _id!: string

  @IsString()
  content?: string

  @IsIn(Object.values(SectorTypes))
  sector?: SectorTypes

  constructor (_id: string, content?: string, sector?: SectorTypes) {
    this._id = _id
    this.content = content
    this.sector = sector
  }
}