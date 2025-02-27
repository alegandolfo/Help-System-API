import express from "express"
import { PostController } from '../controller/PostController'
import { ErrorObj } from '../utils/errorObj'
import { PostCreationFailed, PostDeletionFailed, PostUpdateFailed, PostViewingFailed } from "../model/errors"

let postController = new PostController()

const router = express.Router()
router.use(express.json())

router.post("/", async(req, res) =>{
  try {
        let post = await postController.createPost(req.body.userEmail, req.body.content, req.body.sector)

        if (post instanceof ErrorObj) res.status(post.httpCode).send(post)
        else res.status(200).send(post)
  } catch (error) {
        res.status(500).send(PostCreationFailed)
        console.log("Post creation error :: ", error)
  } 
})

router.get("/:_id", async(req, res) =>{
    try {
        let post = await postController.getPost(req.params._id)

        if (post instanceof ErrorObj) res.status(post.httpCode).send(post)
        else res.status(200).send(post)
    } catch (error) {
        res.status(500).send(PostViewingFailed)
        console.log("Post viewing error :: ", error)
    }
})

router.put("/", async (req, res) => {
    try {
        let post = await postController.updatePost(req.body._id, req.body.content, req.body.sector)

        if (post instanceof ErrorObj) res.status(post.httpCode).send(post)
        else res.status(200).send(post)
    } catch (error) {
        res.status(500).send(PostUpdateFailed)
        console.log("Post update error :: ", error)
    }
})

router.delete("/:_id", async(req, res) => {
    try {
        let post = await postController.deletePost(req.params._id)

        if (post instanceof ErrorObj) res.status(post.httpCode).send(post)
        else res.status(200).send('Post deleted')
    } catch (error) {
        res.status(500).send(PostDeletionFailed)
        console.log("Post deletion error :: ", error)
    }
})

router.get("/", async(req, res) => {
    try {
        let post = await postController.listPosts()

        if (post instanceof ErrorObj) res.status(post.httpCode).send(post)
        else res.status(200).send(post)
    } catch (error) {
        res.status(500).send(PostViewingFailed)
        console.log("Post listing error :: ", error)
    }
})

export default router