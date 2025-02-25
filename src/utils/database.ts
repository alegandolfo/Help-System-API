import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
mongoose.set("debug", true)

const db = {
  host: process.env.DB_HOST,
  userName: process.env.DB_USER,
  password: process.env.DB_PASSWORD
}

const URI = `mongodb+srv://${db.userName}:${db.password}@${db.host}/?retryWrites=true&w=majority`

try {
  Promise.resolve(mongoose.connect(URI))

  console.log('Succesfully connected to MongoDB.')
} catch (err) {
  console.log('MongoDB connection error: ', err)
  process.exit(1)
}