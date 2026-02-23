import dns from 'node:dns/promises'
dns.setServers(['1.1.1.1', '8.8.8.8'])

import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected !!!'))
    .catch((err) => console.error("MongoDB Error !!!", err))


//เรียกใช้ EXPRESS
const app = express()


//MIDDLEWARE
app.use(express.json())


//RUN EXPRESS SERVER
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Express Server is running on port : ${port}`)
})