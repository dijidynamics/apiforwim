const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')
const LogindetailsModel = require('./models/Logindetails')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://dijidynamics2024:1Password**12345!@evmdb.8l73c.mongodb.net/connectapp?retryWrites=true&w=majority&appName=evmdb")
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err))

app.get('/getuserlogindetails', (req, res) => {
    UserModel.find()
        .then(usersa => {
            console.log('Fetched Users:', usersa); // Logs the fetched users in the terminal
            res.json(usersa);
        })
        .catch(err => {
            console.error('Error fetching users:', err); // Logs the error in the terminal
            res.status(500).json({ error: 'Error fetching data' });
        });
});

app.get('/getlogindetails', (req, res) => {
    LogindetailsModel.find()
        .then(usersb => {
            console.log('Fetched Users:', usersb); // Logs the fetched users in the terminal
            res.json(usersb);
        })
        .catch(err => {
            console.error('Error fetching users:', err); // Logs the error in the terminal
            res.status(500).json({ error: 'Error fetching data' });
        });
});

app.listen(3005, () => {
    console.log("Server is running")
})