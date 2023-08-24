export interface Update {
    codAccount: string,
    balance: number
}
export interface NewAccount{
    idAccount:string,
    codAccount: string,
    balance:number,
    idClient:string

}

export interface AccountDTO{
    idClient: string
}

export interface Transfer{
    codClient:string,
    codTransfer:string,
    newBalance:number
}