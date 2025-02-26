import { SectorTypes } from "./SectorTypes"

export class PostEntity {
  _id?: string
  userEmail: string
  content: string
  sector: SectorTypes
  createdAt?: Date
  updatedAt?: Date

  constructor (userEmail: string, content: string, sector: SectorTypes, _id?: string, createdAt?: Date, updatedAt?: Date) {
    this.userEmail = userEmail
    this.content = content
    this.sector = sector
    this._id = _id
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  getId(): string|undefined {
    return this._id
  }

  getUserEmail(): string {
    return this.userEmail
  }

  getContent(): string {
    return this.content
  }

  getSector(): string {
    return this.sector
  }

  getCreatedAt(): Date|undefined {
    return this.createdAt
  }

  getUpdatedAt(): Date|undefined {
    return this.updatedAt
  }
}