import { PostEntity } from "../model/PostEntity"
import { SectorTypes } from "../model/SectorTypes"
import { ErrorObj } from "../utils/errorObj"

export interface PostRepository {
    createPost(userEmail: string, title: string, content: string, sector: SectorTypes): Promise<PostEntity|ErrorObj>
    getPost(_id: string): Promise<PostEntity|ErrorObj>
    updatePost(_id: string, title?: string, content?: string, sector?: SectorTypes): Promise<PostEntity|ErrorObj>
    deletePost(_id: string): Promise<boolean|ErrorObj>
    validatePost(_id: string): Promise<boolean>
    listPosts(): Promise<PostEntity[]|ErrorObj>
}