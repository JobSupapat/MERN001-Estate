import express from 'express'

//เรียกใช้ EXPRESS
const app = express()

//RUN EXPRESS SERVER
app.listen(3000, () => {
    console.log("Express Server is running on port : 3000 !!!")
})