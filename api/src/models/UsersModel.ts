import { Schema,model } from "mongoose";
import { IUser } from "../GlobalTypes";

//I: es de interface y -user: de usuario
const UserSchema = new Schema <IUser>({
    name:{
        type: String,
        required: true
    },
    lastNames:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    rol:{
        type: String,
        enum: ["administrador", "cliente"],
        default: "cliente"
    },
});

export const UserModel = model ("users", UserSchema);