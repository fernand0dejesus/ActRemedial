import doctorsModel from "../models/Doctors.js";
import patientsModel from "../models/Patients.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import {config} from "../config.js"

const logincontroller = {};

//post - agregar
          
logincontroller.login = async (req, res) => {
    const {email, password} = req.body; //req.body = lo que le pedimos al frontend
    console.log({message: "valores"})

try {
let userFound;
let userType;

if(email === config.admin.ADMIN_USERNAME && password === config.admin.ADMIN_PASSWORD){
     userType = "admin"
userFound = {_id:"admin"}

   

}else {
userFound = await patientsModel.findOne({email})
    userType = "Patient"

    if (!userFound){
        userFound = await doctorsModel.findOne({email})
        userType = "Doctor"
    
    }
}

if(!userFound){
    return res.json ({message: "User not found "})
}


if(userType !== "admin"){
    const isMatch = await bcryptjs.compare(password, userFound.password)
    if (!isMatch){
        res.json({message: "invalid password"})
    }
}

jsonwebtoken.sign (
    {id: userFound._id, userType},

    config.jwt.secret,

{expiresIn:config.jwt.expiresIn},

(error, token)=> {
    if(error) console.log ("error" + error)
        res.cookie("authToken", token)
    res.json({message: "login successful"})

}


)

}catch(error){
    console.log("error"+error)


}
}

 export default logincontroller; 