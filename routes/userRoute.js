const express=require('express');
const User = require('../models/User');

const router=express.Router();

//Get all users
router.get('/',async(req,res)=>{
try{
const users=await User.find();
res.json(users)
}
catch(error)
{
res.status(500).json({message:error.message})
}
})



//Get user by ID




//create user
router.post('/',async(req,res)=>{
  try{
    const data={
      name:req.body.name,
      email:req.body.email,
      image:req.body.email
    }

const userRef=await User.findOneAndUpdate(data,data,{
  new:true,
  upsert:true,
  runValidators:true
});
const userRes=await userRef.save();
res.status(201).json(userRes);
  }catch(error)
  {
    res.status(500).json({message:error.message})
  }
})


module.exports=router