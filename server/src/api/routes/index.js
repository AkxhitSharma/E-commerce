const express= require('express')
const router = express.Router();
const authroute = require('./authroutes/index.route')

router.use('/auth',authroute)
router.get('/status',(req,res)=>{
    res.send({message:'ok'})
})

module.exports=router