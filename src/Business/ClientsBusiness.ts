
import { EmailAlreadyUsed, PhoneAlreadyUsed, PasswordInvalid, ClientNotFound, PasswordWrong } from './../CustomErrors/ClientsError';
import { newClient, newClientDTO } from './../Models/ClientModel';
import { ClientsDatabase } from './../Database/ClientsDatabase';
import { GenerateId } from '../Services/GenerateId';
import { CpfAlreadyUsed } from '../CustomErrors/ClientsError';
import { Authenticator } from '../Services/Authenticator';

export class ClientsBusiness{
    clientsDatabase =  new ClientsDatabase()
    authenticator = new Authenticator()

    getAll = async()=>{
        try {
            const result = await this.clientsDatabase.getAll()
            return result    
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    getUserById = async(idClient:string)=>{
        try {

            const verifyClient = await this.clientsDatabase.getUserById(idClient)
            if(verifyClient.length === 0) throw new ClientNotFound()

            const result = await this.clientsDatabase.getUserById(idClient)
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    signup = async (client:newClientDTO)=>{
        try {

            const {nameClient, cpf, phone, email, password} = client

            if(!nameClient || !cpf|| !phone || !email || !password) throw new Error("Todas as informacoes sao necessarias");
            if(cpf.length !== 11) throw new Error("O CPF precisa conter os 11 digitos");
            if(!email.includes('@')) throw new Error("Formato de email invalido");
            if(password.length !== 6) throw new PasswordInvalid()
            

            const verifyCPF = await this.clientsDatabase.verifyCPF(cpf)
            const verifyPhone = await this.clientsDatabase.verifyPhone(phone)
            const verifyEmail = await this.clientsDatabase.verifyEmail(email)

            if(verifyCPF.length === 1) throw new CpfAlreadyUsed()
            if(verifyEmail.length === 1 ) throw new EmailAlreadyUsed()
            if(verifyPhone.length === 1) throw new PhoneAlreadyUsed()
            
            const idClient = GenerateId.newID()

            const newClient:newClient = {
                idClient,
                nameClient,
                cpf,
                phone,
                email,
                password
            }

            await this.clientsDatabase.signup(newClient)
            
            const token = this.authenticator.generateToken(
                {
                    id:idClient
                }
            )

                return {
                    token,
                    idClient
                }
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    login = async(login:any)=>{
        try {
            const {cpf, password} = login
            const verifyCpf = await this.clientsDatabase.verifyCPF(cpf)

            if(verifyCpf.length === 0) throw new ClientNotFound()
            if(verifyCpf[0].password !== password) throw new PasswordWrong()
            
            const token = this.authenticator.generateToken(
                {
                    id:verifyCpf[0].id_user
                }
            )

            return token

        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }
    
    getProfile = async (inToken:string)=>{
        try {
            
            if(!inToken) throw new Error('Token no inserido.')
            const token = this.authenticator.getTokenData(inToken)

            const result = await this.clientsDatabase.getProfile(token)
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}