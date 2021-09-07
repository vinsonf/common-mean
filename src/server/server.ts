import express from "express";
import cors from "cors";

const app = express();
// const port = 3502;

app.get('/', function (req,res){
    console.log('app');
    res.json({message:'test'})
})

app.listen(3502, function(){
 console.log(`running on port http://localhost:3502`)
})