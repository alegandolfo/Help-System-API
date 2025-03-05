import { SectorTypes } from "../model/SectorTypes"
import { UserEntity } from "../model/UserEntity"
import { ErrorObj } from "../utils/errorObj"

export interface UserRepository {
    createUser(email: string, name: string, password: string, sector: SectorTypes): Promise<UserEntity|ErrorObj>
    getUser(email: string): Promise<UserEntity|ErrorObj>
    updateUser(email: string, name?: string, password?: string, sector?: SectorTypes): Promise<UserEntity|ErrorObj>
    deleteUser(email: string): Promise<boolean|ErrorObj>
    validateUser(email: string): Promise<boolean>
    login(email: string, password: string): Promise<UserEntity|ErrorObj>
}