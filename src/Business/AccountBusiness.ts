import { AccountDatabase } from './../Database/AccountDatabase';
import { AccountNotFound, AccountTransferNotFound, BalanceValue, InsufficientFunds, IncorrectBalanceValue, InvalidDepositValue, PleaseInsert } from './../CustomErrors/AccountError';
import { ClientNotFound } from "../CustomErrors/ClientsError";
import { ClientsDatabase } from "../Database/ClientsDatabase";
import { NewAccount, Transfer, Update } from "../Models/Account";
import { GenerateCOD } from "../Services/GenerateCodAccount";
import { GenerateId } from "../Services/GenerateId";

export class AccountBusiness{
    accountDatabse = new AccountDatabase()
    clientsDatabase= new ClientsDatabase();

    getAllAccount = async()=>{
        try {
            const result = await this.accountDatabse.getAllAccount()
            return result
        } catch (error:any) {
            throw new error(error.message)
        }
    }

    createAccount = async (idClient:string)=>{

        const idAccount = GenerateId.newID()
        const codAccount = GenerateCOD.newCOD()

        const verifyClient = await this.clientsDatabase.verifyIdClient(idClient)
        if(verifyClient.length === 0) throw new ClientNotFound()

        try {
            const newAccount:NewAccount = {
                idAccount,
                codAccount,
                balance: 0,
                idClient
            }
            
            await this.accountDatabse.createAccount(newAccount)

        } catch (error:any) {
            
        }
    }

    updateAccount = async (update:Update)=>{
        try {
           const {balance, codAccount} = update
           if(!balance) throw new Error('Valor nao inserido')

           const newUpdate:Update = {
            balance,
            codAccount
           }

           await this.accountDatabse.updateAccount(newUpdate)

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    deleteAccount = async ()=>{
        try {
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getAccountById = async ()=>{
        try {
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getAccountByIdUser = async (idClient:string)=>{
        try {

            const verifyClient = await this.accountDatabse.getAccountByIdUser(idClient);
            if(verifyClient.length === 0 ) throw new ClientNotFound();
            

            const result = await this.accountDatabse.getAccountByIdUser(idClient)
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getAccountByCOD = async ()=>{
        try {
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getMyAccount = async(idAccount:string)=>{
        try {
            const verifyAccount = await this.accountDatabse.getAccountById(idAccount);
            if(verifyAccount.length === 0) throw new AccountNotFound()

            const result = await this.accountDatabse.getMyAccount(idAccount);
            return result    
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    depositValue = async(deposit:number, codAccount:string)=>{
        try {
            
            if(!deposit) throw new PleaseInsert()
            if(deposit <= 0) throw new InvalidDepositValue();
            
            const account = await this.accountDatabse.getAccountByCOD(codAccount)
            if(account.length === 0) throw new AccountNotFound()

            const client = await this.accountDatabse.getAccountByCOD(codAccount)
            if(client.length === 0) throw new AccountNotFound()

            const updateBalance = client[0].balance + Number(deposit)
            

            await this.accountDatabse.depositValue(updateBalance, codAccount)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    transferAccount = async(transfer:Transfer)=>{
        try {

            const {codClient, codTransfer, newBalance} = transfer

            if(!newBalance) throw new BalanceValue()
            
            const client = await this.accountDatabse.getAccountByCOD(codClient)
            if(client.length === 0) throw new AccountNotFound()
            
            const clientTransfer = await this.accountDatabse.getAccountByCOD(codTransfer)
            if(clientTransfer.length === 0) throw new AccountTransferNotFound()
            
            if(client[0].balance === newBalance) throw new IncorrectBalanceValue()
            if(client[0].balance < newBalance) throw new InsufficientFunds()

            const balanceClient = client[0].balance - newBalance // Logica para atualizar o remetente.

            const balanceTransfer = clientTransfer[0].balance + newBalance // logica para atualizar o destinatario.

            const updateAccount = {
                balance:balanceClient,
                codAccount: codClient
            }

            const updateAccountTransfer = {
                balance:balanceTransfer,
                codAccount: codTransfer
            }
            
            await this.accountDatabse.updateAccount(updateAccount) // Atualiza saldo do cliente remetente.
            await this.accountDatabse.updateAccount(updateAccountTransfer) // Atualiza saldo do cliente destinatário.
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}
