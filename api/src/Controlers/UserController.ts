import { Request, Response } from "express";
import { UserModel } from "../models/UsersModel";
import jwt from "jsonwebtoken";

export const registerUsers = async (req:Request, res:Response):
Promise<any> => {
    try {
        //Primero validar que los datos que tenemos existen
        const name = req.body.name
        const email = req.body.email
        const lastNames = req.body.lastNames
        const rol = req.body.rol
        const password = req.body.password
        //administradores no pueden crear clientes
        if(req.user?.rol === "administrador" && rol === "cliente"){
            return res.status(400).json({msg:"Los administradores no pueden crear clienes"})
        }
        if(!name || !email || !lastNames || !rol || !password){
            return res.status(400).json({
                msg:"faltan datos para crear un ususario"
            })
        }
        //Validar que el usuario sea administrador si el usuario a crear es administrador
        //Ocupo una compu nuevaaaaaaaa :(
        if(rol === "administrador" && req.user?.rol != "administrador"){
            return res.status(400).json({
                msg:"No puedes crear un nuevo administrador si no eres uno"
            })
        }
//name="jesus"
        const user = await UserModel.create ({
            name,
            lastNames,
            email,
            password,
            rol
        })
        const token = jwt.sign(JSON.stringify(user),"pocoyo");

        res.status(200).json({msg:"Usuario creado con exito!", token})
        return
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Hubo un error al crear el usuario"})
    }
}

export const singin = async (req:Request, res:Response): Promise<any>=>{
    //correo y contrasena
    //verificar que el usuario existe
    const user = await UserModel.findOne({email:req.body.email, password:req.body.password});
    //si no existe devuelva un error
    //si existe devuelva token
}