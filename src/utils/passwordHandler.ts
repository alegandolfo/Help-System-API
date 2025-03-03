import { pbkdf2Sync, randomBytes } from 'crypto'

export class passwordHandler {
  private readonly salt = randomBytes(16)

  public hashPassword(plaintextPassword: string): string {
    const hash = pbkdf2Sync(plaintextPassword, this.salt,
      2000, 64, `sha512`).toString(`hex`)

    return hash
  }

  getSalt(): string {
    return this.salt.toString(`hex`)
  }
}