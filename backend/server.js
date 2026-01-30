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

let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

// Read (GET)
app.get('/items', (req, res) => {
  res.json(items);
});

// Create (POST)
app.post('/items', (req, res) => {
  const { name } = req.body;
  const newItem = { id: items.length + 1, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Update (PUT)
app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const itemIndex = items.findIndex((item) => item.id === parseInt(id));
  if (itemIndex !== -1) {
    items[itemIndex].name = name;
    res.json(items[itemIndex]);
  } else {
    res.status(404).send('Item not found');
  }
});

// Delete (DELETE)
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  const itemIndex = items.findIndex((item) => item.id === parseInt(id));
  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Item not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
