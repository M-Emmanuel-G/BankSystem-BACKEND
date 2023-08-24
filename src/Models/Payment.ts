export interface PaymentModel{
    idPayment: string;
    codBars: string;
    codAccount: string;
    valuePayment: number;
}

export interface PaymentDTO{
    codAccount: string;
}

export interface MakePayment{
    codBars:string;
    codAccount:string;
}