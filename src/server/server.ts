
import express from 'express';
// const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.json({message: 'working'})
})

app.listen(3002, function() {
    console.log('running on port', 3002)
})