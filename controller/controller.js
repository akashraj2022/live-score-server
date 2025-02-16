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
    await Card.findByIdAndDelete(cardDelete._id);
    await newCard.save();

    res.status(201).json({
      status: true,
      message: "Card created successfully",
      data: newCard,
    });

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
export {  createCard, cardInfoShow,scoreUpdate,getScore };
