import express, { Express } from "express";
import { mainRouter } from './router';
import { PORT } from './src/config';

const app : Express = express();

app.use(express.json());

app.use('/', mainRouter);

app.listen(PORT, () => {
    console.log('Server started');
})