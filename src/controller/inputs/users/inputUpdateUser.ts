import { IsEmail, IsIn, IsNotEmpty, IsString } from "class-validator"
import { SectorTypes } from "../../../model/SectorTypes"

export class inputUpdateUser {
  @IsNotEmpty()
  @IsEmail()
  email!: string

  @IsString()
  name?: string

  @IsString()
  password?: string

  @IsIn(Object.values(SectorTypes))
  sector?: SectorTypes

  constructor (email: string, name?: string, password?: string, sector?: SectorTypes) {
    this.email = email
    this.name = name
    this.password = password
    this.sector = sector
  }
}