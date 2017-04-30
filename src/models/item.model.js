// app/models/user.js
// load the things we need
import mongoose from 'mongoose';
//var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
const userSchema = mongoose.Schema({
        title:{
                type: String
        },
        createdAt: {
                type: Date,
                default: Date.now
        }
});

export default mongoose.model('User', userSchema);