import express from "express";
import patientsController from "../controllers/patientsController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
 // .get(patientsController.getpatients)
  .post(patientsController.createpatients);

//router
  //.route("/:id")
  //.put(patientsController.updatepatients)
  //.delete(patientsController.deletepatients);

export default router;
