import express from "express";
import logincontroller from "../controllers/loginController.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.post(logincontroller.login) //agregar

export default router;