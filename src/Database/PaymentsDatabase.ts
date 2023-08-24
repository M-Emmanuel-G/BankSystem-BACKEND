import { PaymentModel } from "../Models/Payment";
import { BaseDatabase } from "./BaseDatabase";

export class PaymentDatabase extends BaseDatabase {

    TABLE_NAME = 'Payments_Bank'

    createPayment = async (payment:PaymentModel)=>{
        try {
            const {idPayment, codBars, codAccount } = payment

            await PaymentDatabase.connection(this.TABLE_NAME)
                .insert({
                    id_payment: idPayment,
                    fk_billet: codBars,
                    fk_account: codAccount,
                })
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    makePayment = async(codBars:string)=>{
        try {
          
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    myPayments = async (codAccount:string)=>{
        
        try {
            
            const result = await PaymentDatabase.connection(this.TABLE_NAME)
                .select()
                .join('Billets_Bank','Payments_Bank.fk_billet','=','Billets_Bank.cod_bars_billet')
                .where(
                    {
                        fk_account:codAccount
                    }
                )
                return result
        } catch (error:any) {
               throw new Error(error.message);
        }
    }

    getPayment = async (codBars:string)=>{
        try {
            const result = await PaymentDatabase.connection(this.TABLE_NAME)
                .select()
                .where(
                    {
                        cod_bars:codBars
                    }
                )

            return result    
        } catch (error:any) {
               throw new Error(error.message);
        }
    }
}