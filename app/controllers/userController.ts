import client from "../utils/clientConnect";
import {userDatamapper} from "../datamappers/userDatamapper";
import generateKey from "../utils/generateKey";



export interface User {
    id: number;
    firstname: string;
    lastname: string;
    password: string;
    email: string;
    phone: string;
    role: string;
    title: string;
    access: string;
    status: string;
}


export const userController : any = {

    async getAllUsers(req: any, res: any) {

        try {
            const users: User[] = await userDatamapper.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }

    },

    async getOneUser(req: any, res: any) {
        
        const id : number = parseInt(req.params.id);

        try {
            const user : User = await userDatamapper.getOneUser(id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }
        
    },

    async createUser(req: any, res: any) {

        // creation de password aleatoire
        // un changement de mot de passe sera demandé à la première connexion

        const password = generateKey(8)
        req.body.password = password;


        try {
            const user : User = await userDatamapper.createUser(req.body);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }
        
        

    },

    async updateUser(req: any, res: any) {

        const id : number = parseInt(req.params.id);
        if(req.body.id){
            delete req.body.id;
        }

        try {
            const user : User = await userDatamapper.updateUser(id, req.body);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }

    },

    async deleteUser(req: any, res: any) {

        const id : number = parseInt(req.params.id);

        try {
            const user : User = await userDatamapper.deleteUser(id);
            res.status(204).json(user);
        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }
    }
    
}
