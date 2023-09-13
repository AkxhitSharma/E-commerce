const express= require('express')
const router = express.Router();
const {registerUser , loginUser}= require('../../controllers/auth');
const { authenticate } = require('../../controllers/middleware');

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/test',authenticate,(req,res)=>{
    res.send({ok:true})

})


module.exports=router