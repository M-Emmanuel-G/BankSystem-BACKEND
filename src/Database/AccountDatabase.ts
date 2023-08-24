import { NewAccount, Update } from './../Models/Account';
import { BaseDatabase } from "./BaseDatabase";

export class AccountDatabase extends BaseDatabase{
    TABLE_NAME = 'Account_Bank'

    getAllAccount = async()=>{
        try {
            const result = await AccountDatabase.connection(this.TABLE_NAME)
                .select()
            return result    
        } catch (error:any) {
            throw new error(error.message)
        }
    }

    createAccount = async (account:NewAccount)=>{
        try {
            const {idAccount,codAccount, balance, idClient }  = account;
            await AccountDatabase.connection(this.TABLE_NAME)
                .insert({
                    id_account:idAccount,
                    cod_account: codAccount,
                    balance,
                    fk_user: idClient
                })

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    updateAccount = async (update:Update)=>{
        try {
            const {balance, codAccount} = update
            await AccountDatabase.connection(this.TABLE_NAME)
            .update({
                balance,
            })
            .where({
                cod_account: codAccount
            })
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getMyAccount = async(idAccount:string)=>{
        try {
            const result = await AccountDatabase.connection(this.TABLE_NAME)
                .select()
                .join("Users_Bank","Account_Bank.fk_user","=","Users_Bank.id_user")
                .where(
                    {
                        id_account:idAccount
                    }
                )
            return result    
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    deleteAccount = async(codAccount:string)=>{
        try {
            await AccountDatabase.connection(this.TABLE_NAME)
                .delete()
                .where(
                    {
                        cod_account: codAccount
                    }
                )
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getAccountById = async(idAccount:string)=>{
        try {
            const result = await AccountDatabase.connection(this.TABLE_NAME)
                .select()
                .where(
                    {
                        id_account: idAccount
                    }
                )
                return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getAccountByIdUser = async(idClient:string)=>{
        try {
            const result = await AccountDatabase.connection(this.TABLE_NAME)
                // .select('cod_account', 'balance', 'name_client')
                .select('*')
                .join("Users_Bank","Account_Bank.fk_user","=","Users_Bank.id_user")
                .join("Account_Type_Bank","Account_Bank.fk_type_account","=","Account_Type_Bank.id_type_account")
                .where(
                    {
                        fk_user: idClient
                    }
                )
                return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getAccountByCOD = async(codAccount:string)=>{
        try {
            const result = await AccountDatabase.connection(this.TABLE_NAME)
                .select()
                .where(
                    {
                        cod_account: codAccount
                    }
                )
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    depositValue = async(updateBalance:number, codAccount:string)=>{
        try {
            await AccountDatabase.connection(this.TABLE_NAME)
                .update(
                    {
                        balance:updateBalance
                    }
                )
                .where(
                    {
                        cod_account:codAccount
                    }
                )
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    transferAccount = async(codTransfer:string, newBalance:number)=>{
        try {


            await AccountDatabase.connection(this.TABLE_NAME)
                .update(
                    {
                        balance: newBalance
                    }
                )
                .where(
                    {
                        cod_account: codTransfer
                    }
                )
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}