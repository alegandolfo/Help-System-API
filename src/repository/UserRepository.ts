import { SectorTypes } from "../model/SectorTypes"
import { UserEntity } from "../model/UserEntity"
import { ErrorObj } from "../utils/errorObj"

export interface UserRepository {
    createUser(email: string, name: string, password: string, sector: SectorTypes): Promise<UserEntity|ErrorObj>        // Change input to inputCreateUser
    getUser(email: string): Promise<UserEntity|ErrorObj>
    updateUser(email: string, name?: string, password?: string, sector?: SectorTypes): Promise<UserEntity|ErrorObj>     // Change input to inputUpdateUser
    deleteUser(email: string): Promise<boolean|ErrorObj>
}