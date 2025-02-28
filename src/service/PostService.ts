import { PostCreationFailed, PostNotFound, PostViewingFailed } from '../model/errors'
import { SectorTypes } from '../model/SectorTypes'
import { PostEntity } from '../model/PostEntity'
import { PostRepository } from '../repository/PostRepository'
import PostSchema from '../schema/PostSchema'
import { ErrorObj } from '../utils/errorObj'

export class PostService implements PostRepository {

  async createPost (userEmail: string, content: string, sector: SectorTypes): Promise<PostEntity|ErrorObj> {
    let newPost = new PostSchema({
        userEmail: userEmail,
        content: content,
        sector: sector
    })
    await newPost.save()

    if (newPost == null) return PostCreationFailed

    const post = new PostEntity(userEmail, content, sector)
    return post
  }

  async getPost (_id: string): Promise<PostEntity|ErrorObj> {
     let postData = await PostSchema.findOne({_id: _id})
     if (postData == null) return PostNotFound

     const post = new PostEntity(postData.userEmail, postData.content, postData.sector as SectorTypes, postData.createdAt, postData.updatedAt)
     return post
 }

 async updatePost (_id: string, content?: string, sector?: SectorTypes): Promise<PostEntity|ErrorObj> {
    let post = await PostSchema.findOne({_id: _id})
    if (post == null) return PostNotFound

    if (content != null) post.content = content
    if (sector != null) post.sector = sector

    await post.save()
    return new PostEntity(post.userEmail, post.content, post.sector as SectorTypes, post.createdAt, post.updatedAt)
}
 
 async deletePost (_id: string): Promise<boolean|ErrorObj> {
    let post = await PostSchema.findOne({_id: _id})
    if (post == null) return PostNotFound

    await PostSchema.deleteOne({_id: _id})
    return true
 }

 async validatePost(_id: string): Promise<boolean> {
    const postExists = await PostSchema.findOne({_id: _id})

    if (postExists == null) return false
    return true
 }

 async listPosts(): Promise<PostEntity[]|ErrorObj> {
    const postList = await PostSchema.find()

    if (postList == null) return PostViewingFailed

    let posts: PostEntity[] = []
    postList.forEach(element => {
       posts.push(new PostEntity(element.userEmail, element.content, element.sector as SectorTypes))
    })

    return posts
 }
}