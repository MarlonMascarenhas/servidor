var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/login');



var userSchema = new mongoose.Schema({
    username: String,
    senha: String
}, { collection: 'usercollection' }
);
 
module.exports = { Mongoose: mongoose, UserSchema: userSchema }
