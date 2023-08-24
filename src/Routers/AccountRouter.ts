import { AccountController } from './../Controller/AccountController';
import express from 'express'

export const accountRouter = express.Router()
const accountController = new AccountController()

accountRouter.post('/create/:idClient', accountController.createAccount)
accountRouter.get('/getall', accountController.getAllAccount)
accountRouter.get('/myAccount/:idAccount', accountController.getMyAccount)
accountRouter.get('/myAccountClient/:idClient', accountController.getAccountByIdUser)
accountRouter.post('/transfer/:codClient/', accountController.transferAccount)
accountRouter.post('/deposit/:codAccount', accountController.depositValue)