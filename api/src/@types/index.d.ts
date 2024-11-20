
interface IUser {
    name: string;
    email: string;
    lastNames: string;
    password: string;
    rol: "administrador" | "cliente";
}

declare namespace Express{
    export interface Request{
        // ? es para que sea opcional, puede o no existir
        user?:IUser
    }
}