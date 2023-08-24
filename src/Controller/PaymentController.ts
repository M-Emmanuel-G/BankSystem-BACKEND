import { MakePayment } from './../Models/Payment';
import { Request, Response } from "express";
import { PaymentBusiness } from "../Business/PaymentBusiness";
import { PaymentDTO } from "../Models/Payment";


export class PaymentController{

    paymentBusiness = new PaymentBusiness()

    createPayment = async (req:Request, res:Response)=>{
        try {
          const {codAccount} = req.params

          const newPayment:PaymentDTO = {
            codAccount
          }

          await this.paymentBusiness.createPayment(newPayment)
            res.status(200).send({message:'Boleto criado com sucesso...'})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    makePayment = async(req:Request, res:Response)=>{
        try {

            const {codBars} = req.body
            const {codAccount} = req.params

            const newPayment:MakePayment = {
                codBars,
                codAccount,
           }

           await this.paymentBusiness.makePayment(newPayment)

           res.status(200).send({message:'Pagamento realizado com sucesso.'})
           
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    myPayments = async (req:Request, res:Response)=>{
        try {
            const {codAccount} = req.params

            const result = await this.paymentBusiness.myPayments(codAccount)
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getPayment = async(req:Request, res:Response)=>{
        try {
            const {codBars} = req.params

            const result = await this.paymentBusiness.getPayment(codBars)
            res.status(200).send(result)
           
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}