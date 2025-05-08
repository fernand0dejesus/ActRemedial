//Array de metodos (C R U D)
const customersController = {};
import patientsModel from "../models/patients.js";

// SELECT
customersController.getcustomers = async (req, res) => {
  const patients = await patientsModel.find();
  res.json(patients);
};

// INSERT
customersController.createcustomers = async (req, res) => {
  const { name, lastName, birthday, email, password, telephone, dui } = req.body;
  const newcustomers = new patientsModel({ name, lastName, birthday, email, password, telephone, dui});
  await newcustomers.save();
  res.json({ message: "patient save" });
};

// DELETE
customersController.deletecustomers = async (req, res) => {
const deletedcustomers = await patientsModel.findByIdAndDelete(req.params.id);
  if (!deletedcustomers) {
    return res.status(404).json({ message: "patient dont find" });
  }
  res.json({ message: "patient deleted" });
};

// UPDATE
customersController.updatecustomers = async (req, res) => {
  // Solicito todos los valores
  const { name, lastName, birthday, email, password, telephone, dui  } = req.body;
  // Actualizo
  await patientsModel.findByIdAndUpdate(
    req.params.id,
    {
        name, 
        lastName, 
        birthday,
         email, 
         password, 
         telephone, 
         dui 
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "patient update" });
};

export default customersController;
