import { IsEmail, IsIn, IsNotEmpty, IsString } from "class-validator"
import { SectorTypes } from "../../../model/SectorTypes"

export class inputCreateUser {
  @IsNotEmpty()
  @IsEmail()
  email!: string

  @IsNotEmpty()
  @IsString()
  name!: string

  @IsNotEmpty()
  @IsString()
  password!: string

  @IsNotEmpty()
  @IsIn(Object.values(SectorTypes))
  sector!: SectorTypes

  constructor (email: string, name: string, password: string, sector: SectorTypes) {
    this.email = email
    this.name = name
    this.password = password
    this.sector = sector
  }
}