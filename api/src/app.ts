import express, { Application, Request, Response } from "express";
import cors from "cors";
import { registerUsers, singin } from "./Controlers/UserController";
import { createQuestionnaire } from "./Controlers/QuestionnairesController";

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (_req: Request, res: Response)=>{
    res.send("Hola desde mi servidon con TS");
})

//Ususarios
app.post("/users/create", registerUsers)
app.post("/user/controller", singin)

//questions
app.post("/questions/create", createQuestionnaire)

export default app;