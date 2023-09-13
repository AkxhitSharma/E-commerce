const { generateToken } = require('../../../config/jwtToken');
const user = require('../../Modals/User.modal')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

exports.registerUser= asyncHandler(async (req,res)=>{
    try{
        let {email,password} = req.body;
        let findUser = await user.findOne({email:email})
        if(!findUser){
            req.body.password=await bcrypt.hashSync(password, 10)
            const newUser = await user.create(req.body)
            console.log(newUser)
            req.cred = {email:email , password:password}
            this.loginUser(req,res)
        }else{
            throw new Error('User Already Exists')
        }
    }catch(err){
        console.error(err)
    }
})

exports.loginUser = asyncHandler(async(req, res)=>{
    try{
        let {email , password}= req.cred?req.cred:req.body
        let findUser = await user.findOne({email:email}) 
        if(findUser && findUser.ispassword(password)){
            res.json({
                Fullname: findUser?.fullname,
                email:findUser?.email,
                mobile: findUser?.mobile,
                token: generateToken(findUser?._id)
            })
        }else{
            throw new Error('Invalid Credentials')
        }

    }catch(err){
        console.log(err)
    }
})