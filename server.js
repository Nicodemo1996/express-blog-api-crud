const express = require('express');
const app = express();
const port = 3000;

// Middleware per leggere il JSON
app.use(express.json());

// Importo le rotte
const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

// Avvio del server
app.listen(port, () => {
  console.log(`✅ Server avviato su http://localhost:${port}`);
});
