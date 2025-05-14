const appointmentsController = {};

import appointmentsModel from "../models/Appointments.js";

//get - select

appointmentsController.getAppointments = async (req, res) => {

    const appointments = await appointmentsModel.find()
    res.json (appointments)
}

//post - agregar
          
appointmentsController.createAppointments = async (req, res) => {
    const {date, time, reason, idDoctor, idPatient} = req.body; //req.body = lo que le pedimos al frontend
    const  newappointment = new appointmentsModel({date, time, reason, idDoctor, idPatient});
    await newappointment.save()
    res.json({message: "appointment saved"})
}
 
//delete

appointmentsController.deleteAppointments = async (req, res) => {
await appointmentsModel.findOneAndDelete(req.params.id)
res.json({message: "appointment deleted"})
}

// actualizar - post

appointmentsController.updateAppointments = async (req, res) =>{
const {date, time, reason, idDoctor, idPatient} = req.body; // solicito los valores
await appointmentsModel.findByIdAndUpdate(req.params.id, {
    date, 
    time, 
    reason, 
    idDoctor, 
    idPatient
}, {new: true});
res.json({message: "appointment deleted"})
}

export default appointmentsController;