import { SectorTypes } from "./SectorTypes"

export class UserEntity {
  email: string
  name: string
  password: string
  sector: SectorTypes

  constructor (email: string, name: string, password: string, sector: SectorTypes) {
    this.email = email
    this.name = name
    this.password = password
    this.sector = sector
  }

  getEmail(): string {
    return this.email
  }

  getName(): string {
    return this.name
  }

  getPassword(): string {
    return this.password
  }

  getSector(): string {
    return this.sector
  }
}