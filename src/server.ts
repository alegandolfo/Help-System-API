import './utils/database'
import express from 'express'
import { PORT } from './config.js'
import userRoute from './routes/userRoute'
import postRoute from './routes/postRoute'

const app = express()

app.get('/', (req, res) => {
    res.json({message: 'Bem-vindo a API.'})
})

app.use('/user', userRoute)
app.use('/post', postRoute)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}.`)
})