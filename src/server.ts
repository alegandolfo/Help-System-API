import './utils/database'
import express from 'express'
import cors from 'cors'
import { PORT } from './config.js'
import userRoute from './routes/userRoute'
import postRoute from './routes/postRoute'

const app = express()

app.use(cors())
app.use('/user', userRoute)
app.use('/post', postRoute)

app.get('/', (req, res) => {
    res.json({message: 'Bem-vindo a API Help-System.'})
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}.`)
})