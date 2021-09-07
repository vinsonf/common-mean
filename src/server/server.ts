import express from "express";
import cors from "cors";
import path, {resolve} from "path";

const app = express();
const port = 3502;
const __dirname = resolve();


app.use(cors());

app.get('/', function (req,res){
    console.log('app');
    res.json({message:'test'})
})


app.get('/users', function(req,res){
    res.sendFile(path.join(__dirname, 'users.json'))
})

app.listen(port, function(){
 console.log(`running on port http://localhost:${port}`)
})
