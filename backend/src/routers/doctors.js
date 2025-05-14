import express from "express";
import doctorsController from "../controllers/doctorsController.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.get(doctorsController.getDoctors) //mostrar

router.route("/:id")

.put(doctorsController.updateDoctors) //actualizar
.delete(doctorsController.deleteDoctors) //borrar

export default router;

