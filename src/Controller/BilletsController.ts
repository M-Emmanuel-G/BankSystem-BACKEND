import { BilletsBusiness } from './../Business/BilletsBusiness';
import { BilletsModelDTO } from './../Models/Billets';
import { Request, Response } from "express";

export class BilletsController{

    billetsBusiness = new BilletsBusiness()

    createBillet = async (req:Request, res:Response)=>{
        const {descriptionBillet, valueBillet} = req.body
        try {
            
            const newBillet:BilletsModelDTO = {
                descriptionBillet,
                valueBillet
            }

            await this.billetsBusiness.createBillet(newBillet)
            res.status(200).send({message:"Boleto registrado com sucesso."})

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getBillet = async(req:Request, res:Response)=>{
        try {
            const { codBars } = req.body
            
            const result = await this.billetsBusiness.getBillet(codBars)
            res.status(200).send(result)

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    removeBillet = async(req:Request, res:Response)=>{
        try {
            const { codBars } = req.body
            
            await this.billetsBusiness.removeBillet(codBars)
            res.status(200).send({message:"Boleto removido com sucesso."})

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}