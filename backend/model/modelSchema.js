const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    name:{type:String },
    email:{type:String },
    password:{type:String}
})
const student = new mongoose.model('passe',studentSchema)
module.exports = student ;
