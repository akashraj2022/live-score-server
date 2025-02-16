import mongoose, { model } from "mongoose";

const cardSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true,'Title is required'],
    },
    status: {
        type: String,
        required: [true, 'Status is required']
    },
    session: {
        type: String,
        required: true
    },
    country1:{
        type: String,
        required: true
    },
    country2:{
        type: String,
        required: true
    },
    img1: {
        type: String,
        required: true
    },
    img2:{
        type: String,
        required: true
    }
})
const Card = model('Card', cardSchema);

export default Card;