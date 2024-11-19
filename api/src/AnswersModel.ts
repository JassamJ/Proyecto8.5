import { Schema, Types, model } from "mongoose";

interface IAnswer{
    QuestionnaireId: Schema.Types.ObjectId | string;
    QuestionId: Schema.Types.ObjectId | string;
    answer: string;
}

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