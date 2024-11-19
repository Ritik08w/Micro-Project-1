const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const items = require('./data/items.json');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});