import express from 'express'
import { createCard, cardInfoShow, scoreUpdate, getScore, score } from '../controller/controller.js';

const route = express.Router()

route.get('/getScore',getScore);
route.post('/createCard',createCard);
route.get('/score',score)
route.get('/cardInfoShow',cardInfoShow);
route.put('/scoreUpdate',scoreUpdate);

export default route;