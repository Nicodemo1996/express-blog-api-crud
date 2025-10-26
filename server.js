const express = require('express');
const app = express();
const postsRouter = require('./routes/posts');

// Middleware per leggere JSON (body-parser integrato)
app.use(express.json());

// Rotte principali
app.use('/posts', postsRouter);

// Rotta di benvenuto
app.get('/', (req, res) => {
  res.send('✅ API Blog pronta!');
});

app.listen(3000, () => {
  console.log('🚀 Server in ascolto su http://localhost:3000');
});
