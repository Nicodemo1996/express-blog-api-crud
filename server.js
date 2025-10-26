const express = require('express');
const app = express();
const postsRouter = require('./routes/posts');

// Middleware per leggere JSON dal body
app.use(express.json());

// Servire file statici (immagini)
app.use(express.static('public'));

// Rotte principali
app.use('/posts', postsRouter);

// Home route (facoltativa)
app.get('/', (req, res) => {
  res.send('✅ Express Blog API attiva!');
});

// 🔹 Middleware per rotte non trovate
app.use((req, res, next) => {
  res.status(404).json({
    error: 'La risorsa richiesta non esiste',
  });
});

 
app.use((err, req, res, next) => {
  console.error(' Errore nel server:', err.message);
  res.status(500).json({
    error: 'Si è verificato un errore interno al server',
    details: err.message,
  });
});

// Avvio server
app.listen(3000, () => {
  console.log('Server in ascolto su http://localhost:3000');
});
