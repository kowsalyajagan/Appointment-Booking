const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoute = require('../Backend/routes/user');
const doctorRoute = require('../Backend/routes/doctor');
const appointmentRoute = require('../Backend/routes/appointment')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/hospitalDB")
.then(()=>console.log("Connected to MongoDB"))
.catch((err => console.log(err)))

app.get("/",(req,res)=>{
    res.send('API is working')
})
app.use('/user',userRoute);
app.use('/doctor',doctorRoute);
app.use('/appointment',appointmentRoute);

app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000")
})