const doctorsController = {};

import doctorsModel from "../models/Doctors.js";

//get - select

doctorsController.getDoctors = async (req, res) => {

    const doctors = await doctorsModel.find()
    res.json (doctors)
}


 
//delete

doctorsController.deleteDoctors = async (req, res) => {
await doctorsModel.findOneAndDelete(req.params.id)
res.json({message: "doctors deleted"})
}

// actualizar - put

doctorsController.updateDoctors = async (req, res) =>{
const {name, speciality, address, password} = req.body; // solicito los valores
await doctorsModel.findByIdAndUpdate(req.params.id, {
    name, 
    speciality, 
    address, 
    password
}, {new: true});
res.json({message: "doctors deleted"})
}

export default doctorsController;