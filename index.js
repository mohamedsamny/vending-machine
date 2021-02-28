const express = require('express');
const app = express();
const port = process.env.PORT || "3000";
const mongoose = require('./mongoose');
mongoose(app);

app.listen(port, function() {
    console.log(`listening on ${port}`);
});

