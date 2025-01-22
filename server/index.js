const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userlistModel = require('./models/Userlist')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://dijidynamics2024:1Password**12345!@evmdb.8l73c.mongodb.net/swimapp?retryWrites=true&w=majority&appName=evmdb")
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err))

    app.get('/getlogindetails', (req, res) => {
        userlistModel.find()
            .then(userd => {
                console.log('Fetched Users:', userd); // Logs the fetched users in the terminal
                if (userd.length === 0) {
                    console.log('No users found in the database.');
                }
                res.json(userd);
            })
            .catch(err => {
                console.error('Error fetching users:', err); // Logs the error in the terminal
                res.status(500).json({ error: 'Error fetching data' });
            });
    });
    

app.listen(3010, () => {
    console.log("Server is running")
})