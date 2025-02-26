import { PostCreationFailed, PostDeletionFailed, PostNotFound, PostUpdateFailed, PostViewingFailed } from '../model/errors'
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

     const post = new PostEntity(postData.userEmail, postData.content, postData.sector, postData.createdAt, postData.updatedAt)
     return post
 }

 async updatePost (_id: string, content?: string, sector?: SectorTypes): Promise<PostEntity|ErrorObj> {
    let post = await PostSchema.findOne({_id: _id})
    if (post == null) return PostNotFound

    if (content != null) post.content = content
    if (sector != null) post.sector = sector

    await post.save()
    return new PostEntity(post.userEmail, post.content, post.sector, post.createdAt, post.updatedAt)
}
 
 async deletePost (_id: string): Promise<boolean|ErrorObj> {
    let post = await PostSchema.findOne({_id: _id})
    if (post == null) return PostNotFound

    await PostSchema.deleteOne({_id: _id})
    return true
 }
}