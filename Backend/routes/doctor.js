const express = require('express');
const router = express.Router()
const Doctor = require('../model/Doctor')

router.get('/',async(req,res)=>{
    const doctors = await Doctor.find()
    res.json(doctors)
})

router.post('/add',async(req,res)=>{
    const doctors = new Doctor(req.body)
    await doctors.save()
    res.json({message:"Doctor added"})
})
module.exports = router