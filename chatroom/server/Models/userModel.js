import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name : { type :String , required : true , minlength : 3 , maxlength: 20},
    email : { type :String , required : true , minlength : 3 , maxlength: 20 , unique : true } , 
    password : { type :String , required : true , minlength : 3 , maxlength: 20 , unique : true}
    
},
{
    
    timestamps :true,
   
   }
)        
                    //      model mane
const user  = mongoose.model('user' , userSchema);
export default user;