import express from "express";
import registerPatientscontroller from "../controllers/RegisterpatientsController.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.post(registerPatientscontroller.registerPatient) //agregar

//api/registerCustomers/verifyCodeEmail
router.route("/verifyCodeEmail").post(registerPatientscontroller.verifyCodeEmail)



export default router;
