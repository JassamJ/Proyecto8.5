import { Schema, model } from "mongoose";
import { IQuestionnaire } from "../GlobalTypes";

const QuestionnaireSchema = new Schema<IQuestionnaire>({
    Title:{
        type: String,
        ref:"title",
        required: true
    },
    Descripcion:{
        type: String,
        required: true
    },
    UserId:{
        type: Schema.Types.ObjectId,
        ref:"users",
        required: true
    }
});

export const QuestionnaireModel = model ("questionaire", QuestionnaireSchema);