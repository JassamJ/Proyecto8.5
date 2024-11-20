import { Schema, model } from "mongoose";
import { Iquestion } from "../GlobalTypes";

const QuestionSchema = new Schema<Iquestion>({
    title:{
        type:String,
        required: true,
    },
    type:{
        type:String,
        enum: ["radio", "checkbox", "select", "text"],
        required: true,
    },
    isMandatory:{
        type:Boolean,
        required: true,
    },
    questionnaireId:{
        type:Schema.Types.ObjectId,
        ref:"questions",
        required: true,
    },
    answer:{
        type:String,
        required: true,
    },
})