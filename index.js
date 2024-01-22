import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import route from './routes/riskScoreRoute.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())


app.use('/api', route)


const PORT = 5000
const HOST = '0.0.0.0'


app.get('/', (req, res)=>{
    res.send('Hi there')
})

app.all('*', (req, res)=>{       
    res.send('Page not found')
    res.sendStatus(404)
})


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,HOST,()=>{
        console.log('We are listening at '+PORT)
    })
    console.log('connected to db')
})
.catch((error)=>{
    console.log(error)
})