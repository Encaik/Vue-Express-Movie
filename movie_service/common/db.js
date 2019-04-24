var mongoose = require("mongoose");
var url = 'mongodb://localhost:27017/movieService'
mongoose.connect(url);
module.exports = mongoose;