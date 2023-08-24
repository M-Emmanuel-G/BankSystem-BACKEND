import { BilletNotFound } from './../CustomErrors/PaymentError';
import { PleaseInsert } from '../CustomErrors/AccountError';
import { BilletsModel, BilletsModelDTO } from '../Models/Billets';
import { GenerateCOD } from '../Services/GenerateCodAccount';
import { GenerateId } from '../Services/GenerateId';
import { BilletsDatabase } from './../Database/BilletsDatabase';
export class BilletsBusiness{

    billetsDatabase = new BilletsDatabase();

    createBillet = async (billet:BilletsModelDTO)=>{
        try {
            const {valueBillet, descriptionBillet } = billet

            if(!valueBillet || !descriptionBillet) throw new PleaseInsert();

            const idBillet = GenerateId.newID()
            const codBars = GenerateCOD.newCOD()

            const newBillet:BilletsModel = {
                idBillet,
                codBars,
                descriptionBillet,
                valueBillet
            }

            await this.billetsDatabase.createBillet(newBillet)

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getBillet = async(codBars:string)=>{
        try {
            
            const verifyCodBars = await this.billetsDatabase.getBillet(codBars);
            if(verifyCodBars.length === 0) throw new BilletNotFound()

            const result = await this.billetsDatabase.getBillet(codBars)
            return result
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    removeBillet = async(codBars:string)=>{
        try {
            const verifyCodBars = await this.billetsDatabase.getBillet(codBars);
            if(verifyCodBars.length === 0) throw new BilletNotFound()

            await this.billetsDatabase.getBillet(codBars)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}