import { IsEmail, IsIn, IsNotEmpty, IsString } from "class-validator"
import { SectorTypes } from "../../../model/SectorTypes"

export class inputCreatePost {
  @IsNotEmpty()
  @IsEmail()
  userEmail!: string

  @IsNotEmpty()
  @IsString()
  content!: string

  @IsNotEmpty()
  @IsIn(Object.values(SectorTypes))
  sector!: SectorTypes

  constructor (userEmail: string, content: string, sector: SectorTypes) {
    this.userEmail = userEmail
    this.content = content
    this.sector = sector
  }
}