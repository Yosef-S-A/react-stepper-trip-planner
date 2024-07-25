import app from './app.js';
import process from 'process';
import 'dotenv/config'
import mongoose from 'mongoose';

const port = process.env.PORT || 4000;
const uri = process.env.MONGODB_URI;

mongoose.connect(uri).then(() => {
    console.log('Connected to MongoDB');
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});