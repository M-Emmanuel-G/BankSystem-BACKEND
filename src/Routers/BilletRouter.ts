import { BilletsController } from './../Controller/BilletsController';
import express from 'express'

export const billetRouter = express.Router()
const billetsController = new BilletsController()

billetRouter.post('/create', billetsController.createBillet)
billetRouter.post('/getBillet', billetsController.getBillet)
billetRouter.delete('/remove/:CodBars', billetsController.removeBillet)