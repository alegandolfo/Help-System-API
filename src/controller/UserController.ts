import { UserEntity } from '../model/UserEntity';
import { UserService } from "../service/UserService"
import { IError } from '../utils/iError';

let userService:UserService = new UserService()

export class UserController {
  async createUser(email: string, name: string, password: string, sector: string): Promise<UserEntity|IError>{
    let user = await userService.createUser(email, name, password, sector)

    console.log("Succesfull creation. User is ", user)
    return user
  }
  
  async getUser(email: string): Promise<UserEntity|IError>{
    let user = await userService.getUser(email)
    return user
  }

  async updateUser(email: string, name: string, password: string, sector: string): Promise<UserEntity|IError>{
    let user = await userService.updateUser(email, name, password, sector)
    return user
  }

  async deleteUser(email: string): Promise<boolean|IError>{
    let user = await userService.deleteUser(email)
    return user
  }
}