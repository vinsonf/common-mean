import express from "express";
import path from "path";
import cors from "cors"
const __dirname = path.resolve();
const port =3001;


const app = express();
app.use(cors());
app.get('/', function(req, res) {
   res.json({test: 'test'})
  });

  app.get('/users',function(req,res){
      res.sendFile(path.join(__dirname,'users.json'))
  });

  app.get('/posts',function(req,res){
      res.sendFile(path.join(__dirname,'posts.json'));
  });
 
app.listen(port, function() {
    console.log(`port running on http://localhost: ${port}`)
})
