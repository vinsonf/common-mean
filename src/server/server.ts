import express from 'express';
import path from 'path';

const app = express();
const port = 3002;
const __dirname = path.resolve()
app.listen(port, function() {
    console.log(`runnimg on http://localhost: ${port}`)
})


app.get('/users', function(req, res) {
    res.sendFile(path.join(__dirname, 'users.json'))
})

app.get('/', function(req, res) {
    console.log('my app')
   res.json({user: 'test'})
  });