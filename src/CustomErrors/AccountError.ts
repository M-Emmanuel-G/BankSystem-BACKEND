import { CustomError } from "./CustomErrors";

export class AccountNotFound extends CustomError{
    constructor(){
        super(400, 'Conta não localizada ou não existe!')
    }
}

export class AccountTransferNotFound extends CustomError{
    constructor(){
        super(400, 'Conta para transferir não localizada ou não existe!')
    }
}

export class BalanceValue extends CustomError{
    constructor(){
        super(400, 'O valor da transferencia nao pode ser 0!')
    }
}

export class IncorrectBalanceValue extends CustomError{
    constructor(){
        super(400, 'O valor da transferencia nao pode ser igual ao saldo da conta!')
    }
}

export class InsufficientFunds extends CustomError{
    constructor(){
        super(400, 'Voce nao possui saldo suficiente para realizar a transferencia!')
    }
}

export class InvalidDepositValue extends CustomError{
    constructor(){
        super(400, 'O valor do deposito nao pode ser 0 ou menor que o mesmo!')
    }
}

export class PleaseInsert extends CustomError{
    constructor(){
        super(400, 'O valor do deposito precisa ser inserido!')
    }
}
