const express = require('express');
const router = express.Router()
const Appointment = require('../model/Appointment')

router.post('/book',async(req,res)=>{
    try{
    const appointment = new Appointment(req.body)
    await appointment.save()
    res.json({message:"booked successfully"})
    }catch(err){
        console.log(err)
        res.status(500).json({error:err.message})
    }
})
router.get('/book',(req,res)=>{
    res.send("get working")
})

router.get('/:userID', async(req,res)=>{
    console.log('userid route hit')
    const data = await Appointment.find({
        userID:req.params.userID
    })
    res.json(data)
})
module.exports = router;    