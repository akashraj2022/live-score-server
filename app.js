import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes/route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(cors());
app.use('/api', routes);

export default app;
