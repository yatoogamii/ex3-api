import mongoose from 'mongoose';

const HOST = process.env.DB_HOST;
const DATA = process.env.DB_DATA;
const PARA = process.env.DB_PARA;
const USER = process.env.DB_USER;
const PSWD = process.env.DB_PSWD;

const DB_URL = 'mongodb+srv://' + USER + ':' + PSWD + '@' + HOST + DATA + '?' + PARA;

mongoose.connect(DB_URL, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log('database ok')
});

export default db;
