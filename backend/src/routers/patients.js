import express from "express";
import patientsController from "../controllers/patientsController.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.get(patientsController.getPatient) //mostrar

router.route("/:id")

.put(patientsController.updatePatients) //actualizar
.delete(patientsController.deletePatients) //borrar

export default router;

