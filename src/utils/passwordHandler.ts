import { pbkdf2Sync } from 'crypto'

export class passwordHandler {
  private readonly salt = 'd0ed82bf115eb69f9b0ed48117d880t5' // Change salt to generate randomly and save on database

  public hashPassword(plaintextPassword: string): string {
    const hash = pbkdf2Sync(plaintextPassword, this.salt,
      2000, 64, `sha512`).toString(`hex`)

    return hash
  }
}