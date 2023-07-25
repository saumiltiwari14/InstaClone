const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI  || 'mongodb+srv://saumiltiwari14:Neetu123@cluster0.q7zruew.mongodb.net/Cluster0?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongoose Connected");
    }).catch((error) => {
        console.log(error);
    });
}

module.exports = connectDatabase;