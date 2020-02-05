import express from 'express';
import session from 'express-session';
import cors from 'cors';
import Route from './routes';
import mongoose from 'mongoose';
import { initCollection, clearCollection } from './services/collectionService';

require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    name: 'userInfoCookie',
    httpOnly: false,
    secure: false,
    maxAge: 3600000,
    expires: new Date(Date.now() + 3600000),
  }
}));

app.use(Route);
app.use('/static', express.static('public'));

const db = mongoose.connection;

db.on('error', console.error);
db.once('open', async () => {
  console.log('Connected to mongod server');
  await clearCollection();
  await initCollection();
});

mongoose.connect(
  process.env.DB_SCHEME
  + process.env.DB_USER
  + ':'
  + process.env.DB_PW
  + process.env.DB_HOST,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).catch(err => console.error(err));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
