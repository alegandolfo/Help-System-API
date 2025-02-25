import express from "express"
import { UserController } from '../controller/UserController'
import { ErrorObj } from '../utils/errorObj'

let userController = new UserController()

const router = express.Router()
router.use(express.json())

router.post("/", async(req, res) =>{
  try {
        let user = await userController.createUser(req.body.email, req.body.name, req.body.password, req.body.sector)

        if (user instanceof ErrorObj) res.status(user.httpCode).send(user)
        else res.status(200).send(user)
  } catch (error) {
        res.send(error)
  } 
})

router.get("/:email", async(req, res) =>{
    try {
        let user = await userController.getUser(req.params.email)

        if (user instanceof ErrorObj) res.status(user.httpCode).send(user)
        else res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.put("/", async (req, res) => {
    try {
        let user = await userController.updateUser(req.body.email, req.body.name, req.body.password, req.body.sector)

        if (user instanceof ErrorObj) res.status(user.httpCode).send(user)
        else res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete("/:email", async(req, res) => {
    try {
        let user = await userController.deleteUser(req.params.email)

        if (user instanceof ErrorObj) res.status(user.httpCode).send(user)
        else res.status(200).send('User deleted')
    } catch (error) {
        res.status(500).send("Error deleting user")
    }
})

export default router