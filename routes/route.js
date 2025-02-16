import express from 'express'
import { createCard, cardInfoShow, scoreUpdate,  } from '../controller/controller.js';

const route = express.Router()


route.post('/createCard',createCard);

route.get('/cardInfoShow',cardInfoShow);
route.put('/scoreUpdate',scoreUpdate);

export default route;