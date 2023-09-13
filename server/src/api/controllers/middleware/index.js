const jwt = require('jsonwebtoken')
const user = require('../../Modals/User.modal')

exports.authenticate = (req,res,next)=>{
    try{
        const decode = jwt.verify(
            req.headers.authorization,
            process.env.SECRET_KEY);
        req.user=decode
        next()

    }catch(err){
        throw new Error(err)
    }
    
}

exports.authenticateRole = (req,res,next)=>{
    try{
        const finduser = user.findById(req.user._id)
        if(finduser.role ==="admin"){
            next()
        }else{
            res.status(401).json({
                success:false,
                message: 'Unauthorized Access'
            })
        }
        

    }catch(err){
        throw new Error(err)
    }
    
}