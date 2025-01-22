const mongoose = require('mongoose')
const userlogindetailsSchema = new mongoose.Schema({
idu: Number,
useremail: String,
mobilenumber: Number,
password: String,
username: String
})

const UserModel = mongoose.model("userlogindetails", userlogindetailsSchema)
module.exports = UserModel