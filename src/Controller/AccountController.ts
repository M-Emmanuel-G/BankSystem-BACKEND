import { Request, Response } from 'express';
import { Transfer } from '../Models/Account';
import { AccountBusiness } from './../Business/AccountBusiness';
export class AccountController{
    accountBusiness = new AccountBusiness();

    getAllAccount = async(req:Request, res:Response)=>{
        try {
            const result = await this.accountBusiness.getAllAccount()
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    createAccount = async (req:Request, res:Response)=>{
        try {
            const idClient = req.params.idClient

            await this.accountBusiness.createAccount(idClient)

            res.status(200).send({message:'Sua conta foi criada com sucesso...'})

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    updateAccount = async (req:Request, res:Response)=>{
        try {
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    deleteAccount = async (req:Request, res:Response)=>{
        try {
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getAccountById = async (req:Request, res:Response)=>{
        try {
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getAccountByIdUser = async (req:Request, res:Response)=>{
        try {

            const {idClient} = req.params

            const result = await this.accountBusiness.getAccountByIdUser(idClient)
            res.status(200).send(result)
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getAccountByCOD = async (req:Request, res:Response)=>{
        try {
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getMyAccount = async(req:Request, res:Response)=>{
        try {

            const idAccount = req.params.idAccount 

            const result = await this.accountBusiness.getMyAccount(idAccount)
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    depositValue = async(req:Request, res:Response)=>{
        try {
            
            const {codAccount} = req.params
            const {deposit} = req.body

            await this.accountBusiness.depositValue(deposit, codAccount)

            res.status(200).send({message:'O deposito foi realizado com sucesso!'})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    transferAccount = async(req:Request, res:Response)=>{
        try {
            const { newBalance, codTransfer } = req.body
            const {codClient } = req.params

            const transfer:Transfer = {
                codClient,
                codTransfer,
                newBalance
            }

            await this.accountBusiness.transferAccount(transfer)

            res.status(200).send({message:'A transferencia foi atualizada com sucesso!'})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}