import { pbkdf2Sync, randomBytes } from 'crypto'

export class passwordHandler {
  private readonly salt = randomBytes(16).toString(`hex`)

  public hashPassword(plaintextPassword: string): string {
    const hash = pbkdf2Sync(plaintextPassword, this.salt,
      2000, 64, `sha512`).toString(`hex`)

    return hash
  }

  public validatePassword(savedPassword: string, savedSalt: string, attemptedPassword: string): boolean {
    return savedPassword == pbkdf2Sync(attemptedPassword, savedSalt, 2000, 64, `sha512`).toString(`hex`)
  }

  getSalt(): string {
    return this.salt
  }
}