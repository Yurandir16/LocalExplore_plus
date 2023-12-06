import express, {Application} from 'express';
import proxy from 'express-http-proxy';
import morgan from 'morgan';

import dotenv from 'dotenv';
import { Signale } from "signale";

const app:Application = express();
const signale = new Signale();

app.use(morgan('dev'));

dotenv.config();
const PORT = process.env.PORT || 3000;

//Review
app.use('/api/v1/Review/', proxy('http://localhost:3003'));

//User
app.use('/api/v1/User/', proxy('http://localhost:3002'));

//Restaurant
app.use('/api/v1/Menu/', proxy('http://localhost:3001'));
app.use('/api/v1/Restaurant/', proxy('http://localhost:3001'));


app.listen(PORT,() => {
    signale.success(`Servidor corriendo en http://localhost:${PORT}`);
});