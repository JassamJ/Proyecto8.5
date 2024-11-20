import { Schema } from "mongoose";

export interface IUser {
    name: string;
    email: string;
    lastNames: string;
    password: string;
    rol: "administrador" | "cliente";
}

export interface IQuestionnaire{
    Title: string;
    Descripcion: string;
    UserId: Schema.Types.ObjectId | string;
}

export interface Iquestion{
    title: string,
    type: "radio" | "checkbox" | "select" | "text",
    isMandatory: boolean,
    questionnaireId: Schema.Types.ObjectId | string;
    answer:string;
}

export interface IOpcion{
    Title: string;
    QuestionId: Schema.Types.ObjectId
}

export interface IAnswer{
    QuestionnaireId: Schema.Types.ObjectId | string;
    QuestionId: Schema.Types.ObjectId | string;
    answer: string;
}

