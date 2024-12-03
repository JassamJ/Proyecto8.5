import { Request, Response } from "express";
import { QuestionnaireModel } from "../models/Questionnaire";

export const createQuestionnaire = async (req: Request, res: Response): Promise<any> => {
    try {
        const tittle = req.body.tittle
        const description = req.body.description
        const userId = req.body. userId


        if (!tittle || !description || !userId) {
            return res.status(400).json({
                msg: "Todos los campos son obligatorios"
            });
        }

        const newQuestionnaire = new QuestionnaireModel({
            tittle,
            description,
            userId
        });

        await newQuestionnaire.save();

        res.status(200).json({
            msg: "Cuestionario creado exitosamente",
            questionnaire: newQuestionnaire
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Hubo un error al crear el cuestionario"
        });
    }
};

export const getAllQuestionnaires = async (req: Request, res: Response): Promise<any> => {
    try {
        const questionnaires = await QuestionnaireModel.find();

        if (questionnaires.length === 0) {
            return res.status(404).json({
                msg: "No se encontraron cuestionarios"
            });
        }

        res.status(200).json({
            questionnaires
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Hubo un error al obtener los cuestionarios"
        });
    }
};

export const getQuestionnaireById = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;

        const questionnaire = await QuestionnaireModel.findById(id);

        if (!questionnaire) {
            return res.status(404).json({
                msg: "Cuestionario no encontrado"
            });
        }

        res.status(200).json({
            questionnaire
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Hubo un error al obtener el cuestionario"
        });
    }
};


export const updateQuestionnaire = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const { tittle, description, userId } = req.body;

        if (!tittle || !description || !userId) {
            return res.status(400).json({
                msg: "Todos los campos son obligatorios"
            });
        }

        const updatedQuestionnaire = await QuestionnaireModel.findByIdAndUpdate(
            id,
            { tittle, description, userId },
            { new: true }
        );

        if (!updatedQuestionnaire) {
            return res.status(404).json({
                msg: "Cuestionario no encontrado"
            });
        }

        res.status(200).json({
            msg: "Cuestionario actualizado exitosamente",
            questionnaire: updatedQuestionnaire
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Hubo un error al actualizar el cuestionario"
        });
    }
};

export const deleteQuestionnaire = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;

        const deletedQuestionnaire = await QuestionnaireModel.findByIdAndDelete(id);

        if (!deletedQuestionnaire) {
            return res.status(404).json({
                msg: "Cuestionario no encontrado"
            });
        }

        res.status(200).json({
            msg: "Cuestionario eliminado exitosamente"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Hubo un error al eliminar el cuestionario"
        });
    }
};