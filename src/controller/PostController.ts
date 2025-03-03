import { validate } from 'class-validator';
import { SectorTypes } from '../model/SectorTypes';
import { PostEntity } from '../model/PostEntity';
import { PostService } from "../service/PostService"
import { ErrorObj } from '../utils/errorObj';
import { inputCreatePost } from './inputs/posts/inputCreatePost';
import { inputGetPost } from './inputs/posts/inputGetPost';
import { inputDeletePost } from './inputs/posts/inputDeletePost';
import { inputUpdatePost } from './inputs/posts/inputUpdatePost';
import { InvalidPostData, UserNotFound } from '../model/errors';
import { UserService } from '../service/UserService';

let postService:PostService = new PostService()

export class PostController {
  async createPost(userEmail: string, title: string, content: string, sector: SectorTypes): Promise<PostEntity|ErrorObj>{

    let validatedInput = await validate(new inputCreatePost(userEmail, title, content, sector)).then(errors => {
      if (errors.length > 0) return errors
      else return null
    })
    if (validatedInput != null) return new ErrorObj(InvalidPostData.code, InvalidPostData.message, InvalidPostData.httpCode, validatedInput)

    let userService:UserService = new UserService()
    let userExists = await userService.validateUser(userEmail)
    if (!userExists) return UserNotFound

    let post = await postService.createPost(userEmail, title, content, sector)
    return post
  }
  
  async getPost(_id: string): Promise<PostEntity|ErrorObj>{

    let validatedInput = await validate(new inputGetPost(_id)).then(errors => {
      if (errors.length > 0) return errors
      else return null
    })

    if (validatedInput != null) return new ErrorObj(InvalidPostData.code, InvalidPostData.message, InvalidPostData.httpCode, validatedInput)

    let post = await postService.getPost(_id)
    return post
  }

  async updatePost(_id: string, title: string, content: string, sector: SectorTypes): Promise<PostEntity|ErrorObj>{

    let validatedInput = await validate(new inputUpdatePost(_id, title, content, sector)).then(errors => {
      if (errors.length > 0) return errors
      else return null
    })

    if (validatedInput != null) return new ErrorObj(InvalidPostData.code, InvalidPostData.message, InvalidPostData.httpCode, validatedInput)

    let post = await postService.updatePost(_id, title, content, sector)
    return post
  }

  async deletePost(_id: string): Promise<boolean|ErrorObj>{

    let validatedInput = await validate(new inputDeletePost(_id)).then(errors => {
      if (errors.length > 0) return errors
      else return null
    })

    if (validatedInput != null) return new ErrorObj(InvalidPostData.code, InvalidPostData.message, InvalidPostData.httpCode, validatedInput)

    let post = await postService.deletePost(_id)
    return post
  }

  async listPosts(): Promise<PostEntity[]|ErrorObj>{
    let posts = await postService.listPosts()
    return posts
  }
}