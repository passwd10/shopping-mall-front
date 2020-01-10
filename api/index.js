import express from 'express';
import session from 'express-session';
import cors from 'cors';
import Route from './routes';

const app = express();

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

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
