import express from 'express';
import { PaymentController } from '../Controller/PaymentController';

export const paymentRouter = express.Router()
const paymentController = new PaymentController()

paymentRouter.post('/create', paymentController.createPayment)
paymentRouter.post('/makePayment/:codAccount', paymentController.makePayment)
paymentRouter.get('/myPayments/:codAccount', paymentController.myPayments)
paymentRouter.get('/getPayment/:codBars' , paymentController.getPayment)