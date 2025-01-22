const mongoose = require('mongoose');

const userlistschema = new mongoose.Schema({
    username: String,
    password: String,
    usermobile: Number,
    position: String,
    status: String
});

const userlistModel = mongoose.model("swimappapi", userlistschema);

{/*}
 const addSampleUser = async () => {
    const sampleUser = new userlistModel({ username: 'admin', password: '2Password!', usermobile: 11111111, position:'admin', status: 'active' });
    await sampleUser.save();
    console.log('Sample user added successfully');
};

addSampleUser(); */}

module.exports = userlistModel
