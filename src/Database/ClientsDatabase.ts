import { AuthenticationData } from '../Models/Authenticator';
import { newClient } from './../Models/ClientModel';
import { BaseDatabase } from "./BaseDatabase";

export class ClientsDatabase extends BaseDatabase{
    TABLE_NAME = 'Users_Bank'

    getAll = async()=>{
        try {
            const result = await ClientsDatabase.connection(this.TABLE_NAME)
                .select()

            return result    
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    getUserById = async(idClient:string)=>{
        try {
            const result = await ClientsDatabase.connection(this.TABLE_NAME)
                .select()
                .where({
                    id_user:idClient
                })
                return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    signup = async (client:newClient)=>{
        try {
            const { nameClient, idClient, cpf, phone, email, password } = client

            await ClientsDatabase.connection(this.TABLE_NAME)
                .insert({
                    id_user:idClient,
                    name_client:nameClient,
                    cpf,
                    phone,
                    email,
                    password
                })
                return idClient
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    verifyCPF = async(cpf:string)=>{
        try {
            const result = await ClientsDatabase.connection(this.TABLE_NAME)
            .select()
            .where(
                {
                    cpf
                }
            )
        return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    verifyEmail = async(email:string)=>{
        try {
            const result = await ClientsDatabase.connection(this.TABLE_NAME)
                .select()
                .where(
                    {
                        email
                    }
                )
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    verifyPhone = async(phone:string)=>{
        try {
            const result = await ClientsDatabase.connection(this.TABLE_NAME)
            .select()
            .where(
                {
                    phone
                }
            )
        return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    verifyIdClient = async(idClient:string)=>{
        try {
            const result = await ClientsDatabase.connection(this.TABLE_NAME)
            .select()
            .where(
                {
                    id_user:idClient
                }
            )
        return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getProfile = async (token:AuthenticationData)=>{
        try {
            const result = await ClientsDatabase.connection
                .select()
                .from(this.TABLE_NAME)
                .where({id_user: token.id})
            return result[0]
            } catch (error:any) {
            throw new Error(error.message);
        }
    }

}