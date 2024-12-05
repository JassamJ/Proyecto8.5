import { Schema, model } from "mongoose";
import { IOpcion } from "../GlobalTypes";

const OpcionsSchema = new Schema<IOpcion>({
    Title:{
        type: String,
        ref:"title",
        required: true
    },
    QuestionId:{
        type: Schema.Types.ObjectId,
        ref:"question",
        required: true
    },
});

export const OpcionsModel  = model ("option", OpcionsSchema);