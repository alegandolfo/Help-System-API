import express from "express"
import { UserController } from '../controller/UserController'
let userController = new UserController()

const router = express.Router()

router.post("/", async(req,res) =>{
  try {
    console.log("POST request received. Body is ", req.body)

      let user = await userController.createUser(req.body.email, req.body.name, req.body.password, req.body.sector)
      res.send(user)

      console.log("Succesfull creation. User is ", user)
  } catch (error) {
      res.send(error)
  }
})

router.get("/:email", async(req, res) =>{
    res.send(await userController.getUser(req.params.email))
})

router.put("/", async (req, res) => {
    try {
        let user = await userController.updateUser(req.body.email, req.body.name, req.body.password, req.body.sector)
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete("/:email", async(req, res) => {
    try {
        await userController.deleteUser(req.params.email)
        res.status(200).send("User Deleted")
    } catch (error) {
        res.status(500).send("Error deleting user")
    }
})

export default router