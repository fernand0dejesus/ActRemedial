import express from "express"
import cookieParser from "cookie-parser"
import appointmentsRoutes from "./src/routes/appointments.js"
import doctorsRoutes from "./src/routes/doctors.js"
import registerDoctorsRoutes from "./src/routes/registerDoctors.js"
import patientsRouter from "./src/routes/patients.js"
import registerPatientsRoutes from "./src/routes/registerPatients.js"
import login from "./src/routes/login.js"
import logout from "./src/routes/logout.js"

const app = express();

//permitir los archivos json
app.use(express.json())
app.use(cookieParser())


app.use("/api/appointments", appointmentsRoutes)
app.use("/api/doctors", doctorsRoutes)
app.use("/api/registerDoctors", registerDoctorsRoutes)
app.use("/api/patients", patientsRouter)
app.use("/api/registerPatients", registerPatientsRoutes)
app.use("/api/login", login)
app.use("/api/logout", logout)



export default app;
                       