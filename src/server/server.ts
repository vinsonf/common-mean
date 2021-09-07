import express from "express";
import path from "path";
const __dirname = path.resolve();
const port =3001;

const app = express();

app.get('/', function(req, res) {
   res.json({test: 'test'})
  });

  app.get('/user',function(req,res){
      res.sendFile(path.join(__dirname,'users.json'))
  });
 
app.listen(port, function() {
    console.log(`port running on http://localhost: ${port}`)
})
