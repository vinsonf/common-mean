import express from "express";
const app = express();
const port = 3002;
import path from 'path';

const __dirname = path.resolve();


app.get('/todos', function (req, res) {
    res.sendFile(path.join(__dirname, 'todos.json'));
     
});

app.get('/', function (req, res) {
    console.log('app');

    res.json({ test: 'test2' })
  });


  app.listen(port, function () {
    console.log(`running on http://localhost:${port}`)
  })