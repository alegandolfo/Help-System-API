import { IsEmail, IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator"
import { SectorTypes } from "../../../model/SectorTypes"

export class inputUpdateUser {
  @IsNotEmpty()
  @IsEmail()
  email!: string

  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsString()
  password?: string

  @IsOptional()
  @IsIn(Object.values(SectorTypes))
  sector?: SectorTypes

  constructor (email: string, name?: string, password?: string, sector?: SectorTypes) {
    this.email = email
    this.name = name
    this.password = password
    this.sector = sector
  }
}