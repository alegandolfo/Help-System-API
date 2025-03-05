import express from "express"
import jsonwebtoken from 'jsonwebtoken'
import dotenv from 'dotenv'
import { UserController } from '../controller/UserController'
import { ErrorObj } from '../utils/errorObj'
import { UserCreationFailed, UserDeletionFailed, UserLoginFailed, UserUpdateFailed, UserViewingFailed } from "../model/errors"

let userController = new UserController()

const router = express.Router()
router.use(express.json())

router.post("/", async(req, res) =>{
  try {
        let user = await userController.createUser(req.body.email, req.body.name, req.body.password, req.body.sector)

        if (user instanceof ErrorObj) res.status(user.httpCode).send(user)
        else res.status(200).send(user)
  } catch (error) {
        res.status(500).send(UserCreationFailed)
        console.log("User creation error :: ", error)
  } 
})

router.get("/:email", async(req, res) =>{
    try {
        let user = await userController.getUser(req.params.email)

        if (user instanceof ErrorObj) res.status(user.httpCode).send(user)
        else res.status(200).send(user)
    } catch (error) {
        res.status(500).send(UserViewingFailed)
        console.log("User viewing error :: ", error)
    }
})

router.put("/", async (req, res) => {
    try {
        let user = await userController.updateUser(req.body.email, req.body.name, req.body.password, req.body.sector)

        if (user instanceof ErrorObj) res.status(user.httpCode).send(user)
        else res.status(200).send(user)
    } catch (error) {
        res.status(500).send(UserUpdateFailed)
        console.log("User update error :: ", error)
    }
})

router.delete("/:email", async(req, res) => {
    try {
        let user = await userController.deleteUser(req.params.email)

        if (user instanceof ErrorObj) res.status(user.httpCode).send(user)
        else res.status(200).send('User deleted')
    } catch (error) {
        res.status(500).send(UserDeletionFailed)
        console.log("User deletion error :: ", error)
    }
})

router.post("/login", async(req, res) => {
    try {
        let loginResult = await userController.login(req.body.email, req.body.password)

        if (loginResult instanceof ErrorObj) res.status(loginResult.httpCode).send(loginResult)
        else {
            dotenv.config()
            const token = jsonwebtoken.sign({email: loginResult.email, name: loginResult.name}, process.env.JWT_SECRET_KEY as string, {expiresIn: '2 days'})
            res.status(200).send({user: {email: loginResult.email, name: loginResult.name}, token: token})
        }
    } catch (error) {
        res.status(500).send(UserLoginFailed)
        console.log("User login error :: ", error)
    }
})

export default router