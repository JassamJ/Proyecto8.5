import { Schema, Types, model } from "mongoose";
import { IAnswer } from "../GlobalTypes";

const AnswerSchema = new Schema<IAnswer>({
    QuestionnaireId:{
        type: Schema.Types.ObjectId,
        ref:"questionnaries",
        required: true
    },
    QuestionId:{
        type: Schema.Types.ObjectId,
        ref:"question",
        required: true
    },
    answer:{
        type: String,
        ref:"answer",
        required: true
    },

})

export const AnswersModel = model ("answer", AnswerSchema);