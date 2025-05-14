import express from "express";
import appointmentController from "../controllers/appointmentsController.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.get(appointmentController.getAppointments) //mostrar
.post(appointmentController.createAppointments) //agregar

router.route("/:id")

.put(appointmentController.updateAppointments) //actualizar
.delete(appointmentController.deleteAppointments) //borrar

export default router;

