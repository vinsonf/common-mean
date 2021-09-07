import express from "express";
import path from "path";
const __dirname = path.resolve();
const port =3000;



const app = express();

app.get('/', function(req, res) {
    console.log('my app')
   res.json({user: 'test'})
  });

 
app.listen(port, function() {
    console.log(`port runinig on http://localhost: ${port}`)
})
