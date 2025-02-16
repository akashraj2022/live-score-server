import mongoose, { model } from "mongoose";

const scoreSchema = new mongoose.Schema({
    scores: {
        type: Number,
        required: true
    },
    wickets:{
        type: Number,
        required: true
    }
})

const ScoreNumber = model('Score',scoreSchema);

export default ScoreNumber;