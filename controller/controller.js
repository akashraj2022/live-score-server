import Card from "../model/card.model.js";
import ScoreNumber from "../model/score.model.js";

const getScore = async(req,res)=>{
  try {
    const data = await ScoreNumber.findOne();
    if (!data) {
      return res.status(400).json({
        status: false,
        message: "Score not found",
      });
    }
    res.status(200).json({
      status: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "internal error",
      error: error.message,
    });
  }
}

let scoreData = [ "1/0","3/1","5/1","9/1","10/1", "14/1", "18/1", "20/1", "21/1", "21/2", "27/2", "30/2", "31/2", "31/3", "32/3", "33/3", "36/3", "40/3", "42/4", "45/4", "46/4", "46/5", "48/5", "48/6", "52/6", "55/6", "55/7"]
;
let index = 0;

// API to get the latest score
const score =  (req, res) => {
  if (index < scoreData.length) {
    
    res.json({ data: scoreData[index] });
    index++;
    if(index >= scoreData.length){
      index =0;
    }
  } else {
    res.json({ data: "No run" });
  }
};

const createCard = async (req, res, next) => {
  const { title, status, session, country1, country2, img1, img2 } = req.body;
  try {
    const newCard = new Card({
      title,
      status,
      session,
      country1,
      country2,
      img1,
      img2,
    });

     const cardDelete = await Card.findOne();
    if(cardDelete){
      await Card.findByIdAndDelete(cardDelete._id);
      await newCard.save();
      res.status(201).json({
        status: true,
        message: "Card update successfully",
        data: newCard,
      });
    }else{
      await newCard.save();
      res.status(201).json({
        status: true,
        message: "Card created successfully",
        data: newCard,
      });
    }
   

  } catch (error) {
    res.status(500).json({
      status: false,
      message: "An error occurred while creating the card",
      error: error.message,
    });
  }
};

const cardInfoShow = async (req, res) => {
  const data = await Card.findOne();
  try {
    if (!data) {
      return res.status(400).json({
        status: false,
        message: "Data not found",
      });
    }
    res.status(200).json({
      status: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "internal error",
      error: error.message,
    });
  }
};

const scoreUpdate =async (req,res)=>{
    const {scores,wickets} = req.body
    try {
        const scoreData = await ScoreNumber.findOne();
        if (!scoreData) {
            return res.status(404).json({
                status: false,
                message: "Score data not found",
            });
        }
         await ScoreNumber.findByIdAndUpdate(scoreData._id, { scores, wickets });
        res.status(201).json({
            status: true,
            message: "score update successfully",
          });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "ScoreNumber internal error",
            error: error.message,
          });
    }
}
export {  createCard, cardInfoShow,scoreUpdate,getScore,score };
