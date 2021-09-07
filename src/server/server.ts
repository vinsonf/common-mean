import express from "express";
const app = express();
const port = 3002;


  app.listen(port, function () {
    console.log(`running on http://localhost:${port}`)
  })