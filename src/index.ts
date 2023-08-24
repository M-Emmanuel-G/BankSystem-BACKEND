import { clientsRouter } from './Routers/UserRouter';
import express from 'express'
import cors from 'cors'
import { accountRouter } from './Routers/AccountRouter';
import { paymentRouter } from './Routers/PaymentRouter';
import { billetRouter } from './Routers/BilletRouter';

const app = express();

app.use(express.json())
app.use(cors())

app.use('/clients', clientsRouter)
app.use('/accounts', accountRouter)
app.use('/payments', paymentRouter)
app.use('/billets', billetRouter)

app.listen(3004, ()=>{
    console.log(`SERVER IS RUNNING IN LOCALHOST:3004`);
}) 