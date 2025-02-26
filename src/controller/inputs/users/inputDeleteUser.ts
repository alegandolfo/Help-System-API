import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class inputDeleteUser {
  @IsNotEmpty()
  @IsEmail()
  email!: string

  constructor (email: string) {
    this.email = email
  }
}