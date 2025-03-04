import { validate } from 'class-validator';
import { SectorTypes } from '../model/SectorTypes';
import { UserEntity } from '../model/UserEntity';
import { UserService } from "../service/UserService"
import { ErrorObj } from '../utils/errorObj';
import { inputCreateUser } from './inputs/users/inputCreateUser';
import { inputGetUser } from './inputs/users/inputGetUser';
import { inputDeleteUser } from './inputs/users/inputDeleteUser';
import { inputUpdateUser } from './inputs/users/inputUpdateUser';
import { InvalidUserData } from '../model/errors';
import { inputLogin } from './inputs/users/inputLogin';

let userService:UserService = new UserService()

export class UserController {
  async createUser(email: string, name: string, password: string, sector: SectorTypes): Promise<UserEntity|ErrorObj>{

    let validatedInput = await validate(new inputCreateUser(email, name, password, sector)).then(errors => {
      if (errors.length > 0) return errors
      else return null
    })

    if (validatedInput != null) return new ErrorObj(InvalidUserData.code, InvalidUserData.message, InvalidUserData.httpCode, validatedInput)

    let user = await userService.createUser(email, name, password, sector)
    return user
  }
  
  async getUser(email: string): Promise<UserEntity|ErrorObj>{

    let validatedInput = await validate(new inputGetUser(email)).then(errors => {
      if (errors.length > 0) return errors
      else return null
    })

    if (validatedInput != null) return new ErrorObj(InvalidUserData.code, InvalidUserData.message, InvalidUserData.httpCode, validatedInput)

    let user = await userService.getUser(email)
    return user
  }

  async updateUser(email: string, name: string, password: string, sector: SectorTypes): Promise<UserEntity|ErrorObj>{

    let validatedInput = await validate(new inputUpdateUser(email, name, password, sector)).then(errors => {
      if (errors.length > 0) return errors
      else return null
    })

    if (validatedInput != null) return new ErrorObj(InvalidUserData.code, InvalidUserData.message, InvalidUserData.httpCode, validatedInput)

    let user = await userService.updateUser(email, name, password, sector)
    return user
  }

  async deleteUser(email: string): Promise<boolean|ErrorObj>{
    let validatedInput = await validate(new inputDeleteUser(email)).then(errors => {
      if (errors.length > 0) return errors
      else return null
    })

    if (validatedInput != null) return new ErrorObj(InvalidUserData.code, InvalidUserData.message, InvalidUserData.httpCode, validatedInput)

    let user = await userService.deleteUser(email)
    return user
  }

  async login(email: string, password: string): Promise<boolean|ErrorObj>{
    let validatedInput = await validate(new inputLogin(email, password)).then(errors => {
      if (errors.length > 0) return errors
      else return null
    })

    if (validatedInput != null) return new ErrorObj(InvalidUserData.code, InvalidUserData.message, InvalidUserData.httpCode, validatedInput)
    
    let successfulLogin = await userService.login(email, password)
    return successfulLogin
  }
}