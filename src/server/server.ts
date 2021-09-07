import express from 'express';

const app = express();
const port = 3002;

app.listen(port, function() {
    console.log(`runnimg on http://localhost: ${port}`)
})
app.get('/', function(req, res) {
    console.log('my app')
   res.json({user: 'test'})
  });