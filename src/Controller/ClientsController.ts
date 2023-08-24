import { Request, Response } from "express";
import { ClientsBusiness } from "../Business/ClientsBusiness";
import { newClientDTO } from "../Models/ClientModel";

export class ClientsController{
    clientsBusiness = new ClientsBusiness();

    getAll = async(req:Request, res:Response)=>{
        try {
            const result = await this.clientsBusiness.getAll()
            res.status(200).send(result)   
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getUserById = async(req:Request, res:Response)=>{
        try {
            const {idClient} = req.params
            const result = await this.clientsBusiness.getUserById(idClient)

            res.status(200).json(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    signup = async(req:Request, res:Response)=>{
        try {
            const { nameClient, cpf, email, phone, password } = req.body

            const newClient:newClientDTO = {
                nameClient,
                cpf,
                email,
                phone,
                password
            }
            
            const result = await this.clientsBusiness.signup(newClient)

            res.status(200).send({message:'Conta criada com sucesso..', result})
        } catch (error:any) { 
            res.status(400).send(error.message)
        }
    }

    login = async(req:Request, res:Response)=>{
        try {
            const { cpf , password} = req.body

            const login = {
                cpf,
                password
            }
            
            const token  = await this.clientsBusiness.login(login)
            res.status(200).send({message: "Cliente Logado com sucesso!", token})

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getProfile = async(req:Request, res:Response)=>{
        try {
            const inToken = req.headers.authorization as string
            console.log(inToken);
            
            const result = await this.clientsBusiness.getProfile(inToken)
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}