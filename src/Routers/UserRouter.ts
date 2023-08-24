import { ClientsController } from './../Controller/ClientsController';

import express from 'express'

export const clientsRouter = express.Router()
const clientsController = new ClientsController()

clientsRouter.post('/signup', clientsController.signup)
clientsRouter.post('/login', clientsController.login)
clientsRouter.get('/getall', clientsController.getAll)
clientsRouter.get('/getUser/:idClient', clientsController.getUserById)
clientsRouter.get('/getProfile', clientsController.getProfile)


