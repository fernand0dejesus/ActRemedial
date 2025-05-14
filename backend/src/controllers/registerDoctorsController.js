import registerDoctorsModel from "../models/Doctors.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import {config} from "../config.js"

const registerDoctorsController = {};

//post - agregar
          
registerDoctorsController.registerDoctors = async (req, res) => {
    const {name, speciality, email, password} = req.body; //req.body = lo que le pedimos al frontend

try {
const existdoctor = await registerDoctorsModel.findOne({email})


if(existdoctor){
    return res.json({message:"doctor already exist"})
}

//encriptar
const passwordhash = await bcryptjs.hash(password,10)

//guardar todo

const  newdoctor = new registerDoctorsModel({name, speciality, email,password:passwordhash});
await newdoctor.save()
res.json({message: "doctor saved"})

 //token
 jsonwebtoken.sign(
 //q voy a guardar
 {id: newdoctor._id},
 config.jwt.secret,
 {expiresIn:config.jwt.expiresIn},
 (error,token) =>{
if (error)console.log("error"+error)
    res.cookie("authToken",token)
res.json({message: "doctor guardado"})
    
}
)
 //secret word (env)





}catch(error){
    console.log("error"+error)


}
}

 export default registerDoctorsController;