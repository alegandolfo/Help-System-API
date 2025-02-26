import { IsEmail, IsNotEmpty } from "class-validator"

export class inputDeleteUser {
  @IsNotEmpty()
  @IsEmail()
  email!: string

  constructor (email: string) {
    this.email = email
  }
}