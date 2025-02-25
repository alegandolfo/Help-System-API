import { SectorTypes } from "../model/SectorTypes"
import { UserEntity } from "../model/UserEntity"
import { IError } from "../utils/iError"

export interface UserRepository {
    createUser(email: string, name: string, password: string, sector: SectorTypes): Promise<UserEntity|IError>
    getUser(email: string): Promise<UserEntity|IError>
    updateUser(email: string, name?: string, password?: string, sector?: SectorTypes): Promise<UserEntity|IError>
    deleteUser(email: string): Promise<boolean|IError>
}