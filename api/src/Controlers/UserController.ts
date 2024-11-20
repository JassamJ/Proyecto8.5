import { Request, Response } from "express";
import { UserModel } from "../models/UsersModel";

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
        if(name || email || lastNames || rol || password){
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
        await UserModel.create ({
            name,
            lastNames,
            email,
            password,
            rol
        })
        return res.status(200).json({msg:"Usuario creado con exito!"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Hubo un error al crear el usuario"})
    }
}