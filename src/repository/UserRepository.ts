import { UserEntity } from "../model/UserEntity"
import { IError } from "../utils/iError"

export interface UserRepository {
    createUser(email: string, name: string, password: string, sector: string): Promise<UserEntity|IError>
    getUser(email: string): Promise<UserEntity|IError>
    updateUser(email: string, name?: string, password?: string, sector?: string): Promise<UserEntity|IError>
    deleteUser(email: string): Promise<boolean|IError>
}