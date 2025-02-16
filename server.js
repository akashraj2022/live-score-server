import app from "./app.js";
import connectionToDB from "./db/dataBase.js";
const PORT = process.env.PORT;
connectionToDB();

app.get('/',(req,res)=>{
    res.status(200).json({
        status: true,
        message: 'hello world'
    })
})

app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
})