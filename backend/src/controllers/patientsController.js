const patientsController = {};

import patientsModel from "../models/Patients.js";

//get - select

patientsController.getPatient = async (req, res) => {

    const doctors = await patientsModel.find()
    res.json (doctors)
}


 
//delete

patientsController.deletePatients = async (req, res) => {
await patientsModel.findOneAndDelete(req.params.id)
res.json({message: "patient deleted"})
}

// actualizar - put

patientsController.updatePatients = async (req, res) =>{
const {name, birthday, address, password, telephone, isVerfied} = req.body; // solicito los valores
await patientsModel.findByIdAndUpdate(req.params.id, {
    name,
     birthday, 
     address, 
     password, 
     telephone, 
     isVerfied
}, {new: true});
res.json({message: "patient deleted"})
}

export default patientsController;