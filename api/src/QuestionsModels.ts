import { Schema, model } from "mongoose";

interface Iquestion{
    title: string,
    type: "radio" | "checkbox" | "select" | "text",
    isMandatory: boolean,
    questionnaireId: Schema.Types.ObjectId | string;
    answer:string;
}

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