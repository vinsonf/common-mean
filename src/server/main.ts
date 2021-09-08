const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.json({message: 'working'});
})

app.listen(3000, function() {
    console.log('running on port', 3000);
}