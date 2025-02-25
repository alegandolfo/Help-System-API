import { UserCreationFailed, UserDeletionFailed, UserUpdateFailed, UserViewingFailed } from '../model/errors'
import { SectorTypes } from '../model/SectorTypes'
import { UserEntity } from '../model/UserEntity'
import { UserRepository } from '../repository/UserRepository'
import UserSchema from '../schema/UserSchema'
import { ErrorObj } from '../utils/errorObj'

export class UserService implements UserRepository {

  async createUser (email: string, name: string, password: string, sector: SectorTypes): Promise<UserEntity|ErrorObj> {
    let newUser = new UserSchema({
        email: email,
        name: name,
        password: password,
        sector: sector
    })
    await newUser.save()

    if (newUser == null) return UserCreationFailed

    const user = new UserEntity(email, name, password, sector)
    return user
}

  async getUser (email: string): Promise<UserEntity|ErrorObj> {
     let userData = await UserSchema.findOne({email: email})
    
     if (userData == null) return UserViewingFailed

     const user = new UserEntity(userData.email, userData.name, userData.password, userData.sector)
     return user
 }

 async updateUser (email: string, name?: string, password?: string, sector?: SectorTypes): Promise<UserEntity|ErrorObj> {
    let user = await UserSchema.findOne({email: email})

    if (user == null) return UserUpdateFailed

    if (name != null) user.name = name
    if (password != null) user.password = password
    if (sector != null) user.sector = sector

    await user.save()
    return new UserEntity(user.name, user.email, user.password, user.sector)
}
 
 async deleteUser (email: string): Promise<boolean|ErrorObj> {
    let user = await UserSchema.deleteOne({email: email})

    if (user == null) return UserDeletionFailed

    return true
 }
}