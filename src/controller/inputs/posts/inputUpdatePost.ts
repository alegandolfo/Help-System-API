import { IsIn, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator"
import { SectorTypes } from "../../../model/SectorTypes"

export class inputUpdatePost {
  @IsNotEmpty()
  @IsMongoId()
  _id!: string

  @IsOptional()
  @IsString()
  title?: string

  @IsOptional()
  @IsString()
  content?: string

  @IsOptional()
  @IsIn(Object.values(SectorTypes))
  sector?: SectorTypes

  constructor (_id: string, title?: string, content?: string, sector?: SectorTypes) {
    this._id = _id
    this.title = title
    this.content = content
    this.sector = sector
  }
}