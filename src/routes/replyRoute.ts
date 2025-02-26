import express from "express"
import { ReplyController } from '../controller/ReplyController'
import { ErrorObj } from '../utils/errorObj'
import { ReplyCreationFailed, ReplyDeletionFailed, ReplyUpdateFailed, ReplyViewingFailed } from "../model/errors"

let replyController = new ReplyController()

const router = express.Router()
router.use(express.json())

router.post("/", async(req, res) =>{
  try {
        let reply = await replyController.createReply(req.body.userEmail, req.body.postId, req.body.content, req.body.replyTo)

        if (reply instanceof ErrorObj) res.status(reply.httpCode).send(reply)
        else res.status(200).send(reply)
  } catch (error) {
        res.status(500).send(ReplyCreationFailed)
        console.log("Reply creation error :: ", error)
  } 
})

router.get("/:_id", async(req, res) =>{
    try {
        let reply = await replyController.getReply(req.params._id)

        if (reply instanceof ErrorObj) res.status(reply.httpCode).send(reply)
        else res.status(200).send(reply)
    } catch (error) {
        res.status(500).send(ReplyViewingFailed)
        console.log("Reply viewing error :: ", error)
    }
})

router.put("/", async (req, res) => {
    try {
        let reply = await replyController.updateReply(req.body._id, req.body.content)

        if (reply instanceof ErrorObj) res.status(reply.httpCode).send(reply)
        else res.status(200).send(reply)
    } catch (error) {
        res.status(500).send(ReplyUpdateFailed)
        console.log("Reply update error :: ", error)
    }
})

router.delete("/:_id", async(req, res) => {
    try {
        let reply = await replyController.deleteReply(req.params._id)

        if (reply instanceof ErrorObj) res.status(reply.httpCode).send(reply)
        else res.status(200).send('Reply deleted')
    } catch (error) {
        res.status(500).send(ReplyDeletionFailed)
        console.log("Reply deletion error :: ", error)
    }
})

export default router