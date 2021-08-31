const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(
                `mongodb+srv://${process.env.mydbname}:${process.env.mypwd}@cluster0.dxosq.mongodb.net/${process.env.db}?retryWrites=true&w=majority`, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })
            .then((result) => console.log("connected"));
    } catch (error) {
        handleError(err)
    }
}

module.exports = connectDB