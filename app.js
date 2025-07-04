const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express behind NGINX!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'This is an API response from Express.' });
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
