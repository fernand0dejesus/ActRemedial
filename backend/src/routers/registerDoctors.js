import express from "express";
import registerEmployeesController from "../controllers/registerDoctorsController.js";



//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")

.post(registerEmployeesController.registerDoctors) //agregar

export default router;
