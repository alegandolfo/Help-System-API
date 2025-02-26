import { PostEntity } from "../model/PostEntity"
import { SectorTypes } from "../model/SectorTypes"
import { ErrorObj } from "../utils/errorObj"

export interface PostRepository {
    createPost(userEmail: string, content: string, sector: SectorTypes): Promise<PostEntity|ErrorObj>        // Change input to inputCreatePost
    getPost(_id: string): Promise<PostEntity|ErrorObj>
    updatePost(_id: string, content?: string, sector?: SectorTypes): Promise<PostEntity|ErrorObj>            // Change input to inputUpdatePost
    deletePost(_id: string): Promise<boolean|ErrorObj>
}