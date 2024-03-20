const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/node_mongodb')
        console.log("Connect to MongoDB successfully")
    }
    catch (error) {
        console.log("Connect failed")
    }
}

module.exports = connectDB