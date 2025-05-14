import express from "express";
import registerPatientcontroller from "../controllers/RegisterpatientsController";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.post(registerPatientController.registerPatient) //agregar

//api/registerCustomers/verifyCodeEmail
router.route("/verifyCodeEmail").post(registerPatientController.verifyCodeEmail)



export default router;
