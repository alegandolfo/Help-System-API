import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class inputLogin {
  @IsNotEmpty()
  @IsEmail()
  email!: string

  @IsNotEmpty()
  @IsString()
  password!: string

  constructor (email: string, password: string) {
      this.email = email
      this.password = password
  }
}