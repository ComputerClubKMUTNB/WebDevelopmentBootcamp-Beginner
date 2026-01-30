const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/h1', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/json', (req, res) => {
  res.json({ key: 'value' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
