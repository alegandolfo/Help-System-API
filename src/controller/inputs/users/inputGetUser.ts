import { IsEmail, IsNotEmpty } from "class-validator"

export class inputGetUser {
  @IsNotEmpty()
  @IsEmail()
  email!: string

  constructor (email: string) {
      this.email = email
  }
}