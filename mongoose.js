const mongoose = require("mongoose");
const username = process.env.DB_USERNAME || "admin";
const password = process.env.DB_PASSWORD;
const uri = `mongodb+srv://${username}:${password}@cluster0.mfetu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

module.exports = function (app) {
    mongoose.connect(uri,{ useCreateIndex: true, useNewUrlParser: true });
    mongoose.Promise = global.Promise;
    app.set("mongooseClient", mongoose);
};
