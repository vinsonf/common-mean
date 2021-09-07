import express from 'express';
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!!');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));