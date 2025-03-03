import { UserCreationFailed, UserNotFound } from '../model/errors'
import { SectorTypes } from '../model/SectorTypes'
import { UserEntity } from '../model/UserEntity'
import { UserRepository } from '../repository/UserRepository'
import UserSchema from '../schema/UserSchema'
import { ErrorObj } from '../utils/errorObj'
import { passwordHandler } from '../utils/passwordHandler'

export class UserService implements UserRepository {

  async createUser (email: string, name: string, password: string, sector: SectorTypes): Promise<UserEntity|ErrorObj> {
    const handlePass = new passwordHandler()
    const encryptedPassword = handlePass.hashPassword(password)

    let newUser = new UserSchema({
        email: email,
        name: name,
        password: encryptedPassword,
        salt: handlePass.getSalt(),
        sector: sector
    })
    await newUser.save()

    if (newUser == null) return UserCreationFailed

    const user = new UserEntity(email, name, encryptedPassword, sector)
    return user
}

  async getUser (email: string): Promise<UserEntity|ErrorObj> {
     let userData = await UserSchema.findOne({email: email})
     if (userData == null) return UserNotFound

     const user = new UserEntity(userData.email, userData.name, userData.password, userData.sector as SectorTypes)
     return user
 }

 async updateUser (email: string, name?: string, password?: string, sector?: SectorTypes): Promise<UserEntity|ErrorObj> {
    let user = await UserSchema.findOne({email: email})
    if (user == null) return UserNotFound

    if (name != null) user.name = name
    if (password != null) {
      const handlePass = new passwordHandler()
      const encryptedPassword = handlePass.hashPassword(password)

      user.password = encryptedPassword
      user.salt = handlePass.getSalt()
    }
    if (sector != null) user.sector = sector

    await user.save()
    return new UserEntity(user.name, user.email, user.password, user.sector as SectorTypes)
}
 
 async deleteUser (email: string): Promise<boolean|ErrorObj> {
    let user = await UserSchema.findOne({email: email})
    if (user == null) return UserNotFound

    await UserSchema.deleteOne({email: email})
    return true
 }

 async validateUser(email: string): Promise<boolean> {
  const userExists = await UserSchema.findOne({email: email})

  console.log("User Return :: ", userExists)

  if (userExists == null) return false
  return true
 }
}