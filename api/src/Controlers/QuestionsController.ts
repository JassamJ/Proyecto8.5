import { Request, Response } from "express";
import { QuestionsModels } from "../models/QuestionsModels"; //Por wue sale askkkkkkkkjjklllllklmklñ
import mongoose from "mongoose";

export const registerQuestion = async (req: Request, res: Response): Promise <any> => {
    try{
        //validar los datos, haber y cuales son?
        const title = req.body.title
        const type = req.body.type
        const isMandatory= req.body.isMandatory
        const questionnaireId = req.body.questionnaireId
        const answer = req.body.answer

        //campos, no se, estaba en el codigo del profe
        if (!title || !type || isMandatory === undefined || !questionnaireId || !answer) {
            return res.status(400).json({ msg: "Todos los campos son obligatorios" });
        }

        // Validar tipo de pregunta (este esta dificil)
        const validTypes = ['radio', 'checkbox', 'select', 'text'];
        if (!validTypes.includes(type)) {
            return res.status(400).json({
                msg: "El tipo de pregunta no es válido."},
            );
        }

        // Validar ObjectId (no lo entiendo de todo, pero funciona)
        if (!mongoose.Types.ObjectId.isValid(questionnaireId)) {
            return res.status(400).json({ msg: "no es un ObjectId válido" });
        }

        // Crear la nueva pregunta
        const user = await QuestionsModels.create({
            title,
            type,
            isMandatory,
            questionnaireId,
            answer,
        });
        
        res.status(200).json({ msg: "Pregunta registrada exitosamente!"})
        return
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Hubo un error al registrar la pregunta", error })
    }
}


