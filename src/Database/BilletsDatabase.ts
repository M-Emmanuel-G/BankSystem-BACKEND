import { BilletsModel } from './../Models/Billets';
import { BaseDatabase } from "./BaseDatabase";

export class BilletsDatabase extends BaseDatabase{
    TABLE_NAME = 'Billets_Bank'
    createBillet = async (billet:BilletsModel)=>{
        try {
            const {idBillet, codBars, descriptionBillet, valueBillet} = billet

            await BilletsDatabase.connection(this.TABLE_NAME)
                .insert(
                    {
                        id_billet:idBillet,
                        cod_bars:codBars,
                        description_billets: descriptionBillet,
                        value_billets: valueBillet
                    }
                )
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getBillet = async(codBars:string)=>{
        try {
            
            
            const result = await BilletsDatabase.connection(this.TABLE_NAME)
                .select()
                .where(
                    {
                        cod_bars_billet:codBars
                    }
                )
                return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    removeBillet = async(codBars:string)=>{
        try {
            await BilletsDatabase.connection(this.TABLE_NAME)
                .delete()
                .where(
                    {
                        cod_bars:codBars
                    }
                )
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

}