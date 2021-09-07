import express from 'express';
import cors from 'cors';
import path from 'path';

const __dirname = path.resolve();
const app = express();
const port = 3000;

app.use(cors)

app.get('/', function(req, res) {
    res.json({message: 'up and running'})
})

app.listen(port, function() {
    console.log('running on http://localhost:'+ port) 
})