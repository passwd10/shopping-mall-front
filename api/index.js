import express from 'express';
import session from 'express-session';
import cors from 'cors';
import Route from './routes';
import mongoose from 'mongoose';
import { initCollection, clearCollection } from './services/collectionService';

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true,
}));

app.use(session({
  secret: 'hello',
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
db.once('open', () => {
  console.log('Connected to mongod server');
  clearCollection();
  initCollection();
});

mongoose.connect('mongodb://localhost:27017/store', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
