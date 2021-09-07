import express from "express";
const app = express();


app.get('/', function (req, res) {
    res.json({ message: 'working' });
});



app.listen(3003, function () {
    console.log('run on port');
    
})