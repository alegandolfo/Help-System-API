export class UserEntity {
  email: string
  name: string
  password: string
  sector: string

  constructor (name: string, email: string, password: string, sector: string) {
    this.email = email
    this.name = name
    this.password = password
    this.sector = sector
  }

  getEmail(): string {
    return this.email
  }

  getName(): string {
    return this.email
  }

  getPassword(): string {
    return this.email
  }

  getSector(): string {
    return this.email
  }
}