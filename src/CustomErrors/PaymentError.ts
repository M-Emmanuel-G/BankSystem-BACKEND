import { CustomError } from "./CustomErrors";

export class BilletNotFound extends CustomError{
    constructor(){
        super(400, 'Boleto não encontrado.')
    }
}