const express = require('express');
const app = express();

const mongoose = require('./mongoose');
mongoose(app);

// const mongooseClient = app.get('mongooseClient');
app.listen(3000, function() {
    console.log('listening on 3000')
})