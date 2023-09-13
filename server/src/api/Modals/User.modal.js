const mongoose= require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    email:{ 
        type:String,
        required:true,
        unique:true
    },
    password:{ 
        type:String,
        required:true 
    },
    mobile :{
        type:String,
        unique:true,
        required:true
    },
    role :{
        type: String,
        default:"user"
    }
})


// userSchema.pre('save', async()=>{
//     console.log(this)
//     const pass = this.password
//     this.password=await bcrypt.hashSync(pass, 10)
// })

userSchema.method({
    async ispassword (enteredpass){
        return await bcrypt.compare(enteredpass , this.password)
    },

})

module.exports = mongoose.model('user',userSchema)