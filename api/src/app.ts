import express, { Application, Request, Response } from "express";
import cors from "cors";
import { registerUsers } from "./Controlers/UserController";
import { getMetrics, getQuestionnaires } from "./Controlers/QuestionnairesController";
import { singin } from "./Controlers/UserController";

const app: Application = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (_req:Request, res:Response)=>{
    res.send("Hola desde mi servidor con TS")

})

//usuarios
app.post("/users/create", registerUsers)
app.post("/users/sign-in", singin)
app.post("/questionnaire/get-metrics",getMetrics)
app.get("/questionnaires/get-all", getQuestionnaires)

export default app;