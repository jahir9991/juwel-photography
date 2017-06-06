import mongoose from "mongoose";
const dotenv = require('dotenv');

dotenv.load({path: '.env'});
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
// mongoose.connect("mongodb://localhost:27017/dokan");

mongoose.connection.on('error', (err) => {
    console.error(err);
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
    process.exit();
});
export default  mongoose;
