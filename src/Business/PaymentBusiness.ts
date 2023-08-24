import { BilletsDatabase } from './../Database/BilletsDatabase';
import { Update } from './../Models/Account';
import { AccountNotFound, BalanceValue, IncorrectBalanceValue, InsufficientFunds, PleaseInsert } from './../CustomErrors/AccountError';
import { AccountDatabase } from './../Database/AccountDatabase';
import { PaymentDatabase } from './../Database/PaymentsDatabase';
import { MakePayment, PaymentDTO, PaymentModel } from "../Models/Payment";
import { GenerateId } from '../Services/GenerateId';
import { BilletNotFound } from '../CustomErrors/PaymentError';

export class PaymentBusiness{

    paymentDatabase = new PaymentDatabase()
    accountDatabase = new AccountDatabase()
    billetDatabase = new BilletsDatabase()

    createPayment = async (payment:PaymentDTO)=>{
        try {
           

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    makePayment = async(payment:MakePayment)=>{
        try {

            const {codBars, codAccount} = payment

            if(!codBars) throw new PleaseInsert()

            const verifyCodBars = await this.billetDatabase.getBillet(codBars)
            if(verifyCodBars.length === 0) throw new BilletNotFound()

            const verifyAccount = await this.accountDatabase.getAccountByCOD(codAccount)
            if(verifyAccount.length === 0) throw new AccountNotFound() 

            const getValueBillet = verifyCodBars[0].value_billet
            const getBalance = verifyAccount[0].balance
            const updateBalance = getBalance - getValueBillet

            if(getBalance < getValueBillet) throw new InsufficientFunds()
            
            const newBalance = {
                balance: updateBalance,
                codAccount
            }

            await this.accountDatabase.updateAccount(newBalance)

            const idPayment = GenerateId.newID()

            const newPayment:PaymentModel = {
                idPayment,
                codBars,
                codAccount,
                valuePayment:getValueBillet
            }

            await this.paymentDatabase.createPayment(newPayment)
           
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    myPayments = async (codAccount:string)=>{
        try {

            const verifyAccount = await this.accountDatabase.getAccountByCOD(codAccount);
            if(verifyAccount.length === 0) throw new AccountNotFound()

            const result = await this.paymentDatabase.myPayments(codAccount);
            return result
        } catch (error:any) {
               throw new Error(error.message);
        }
    }

    getPayment = async(codBars:string)=>{
        try {

            const verifyPayment = await this.paymentDatabase.getPayment(codBars);
            if(verifyPayment.length === 0) throw new BilletNotFound()

            const result = await this.paymentDatabase.getPayment(codBars);
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}