const express = require('express');
const router = express.Router()
const User = require('../model/User')
router.post('/register',async(req,res)=>{
    try {
        const user = new User(req.body)
    await user.save()
    res.json({message:'user registered'})
    } catch (error) {
        res.status(500).json(error)
}
})
router.get('/',async(req,res)=>{
    const users = await User.find()
    res.send("register page working")
    res.json(users)
})
router.post('/login',async(req,res)=>
{
try {
    const user = await User.findOne({
        email:req.body.email,
    password: req.body.password})
    if(user){
       return res.json(user)
    }else{
        res.json({message:"invalid credential"})
    }
} catch (error) {
    res.status(500).json(error)}
})
router.get('/login', (req,res)=>{
    res.send("login page working")
})
module.exports = router