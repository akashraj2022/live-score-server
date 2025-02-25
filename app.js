import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes/route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(cors());
app.use('/api', routes);

export default app;
