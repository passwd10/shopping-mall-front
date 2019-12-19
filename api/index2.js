const express = require('express');
const cors = require('cors');

const {
  getItems,
  addItem,
  removeItem,
  toggleItem,
} = require('./itemService');

const app = express();

const port = 3000;

app.use(express.json()); //json 인식가능
app.use(cors());

app.get('/items', (req, res) => {
  const items = getItems();
  res.send({ items });
});

app.post('/items', (req, res) => {
  const { title } = req.body; // post방식으로 넘어오는 파라미터를 담고있다. HTTP의 BODY부분에 담겨져 있는고 파싱을 위해 body-parser같은 패키지가 필요
  const items = addItem(title);
  res.send({ items });  //task를 {}로 감싸는 이유?
});

app.delete('/items/:id', (req, res) => {
  const id = req.params.id; //params를 통해 id값을 가져옴
  const items = removeItem(id);
  res.send({ items });
});

app.patch('/items/:id', (req, res) => { //고치는 METHOD
  const id = req.params.id; // 이름붙은 라우트 파라미터를 담는다. 
  const items = toggleItem(id);
  res.send({ items });
});

app.listen(3000, () => {
  console.log(`Listening on port ${port}`);
});