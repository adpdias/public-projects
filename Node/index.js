// config inicial
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// forma de ler o JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// rotas da API
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);


// rota inicial / endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Oi Express!' });
});

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
const DB_NAME = process.env.DB_NAME;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.hgplm68.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Conectamos ao MongoDB!');
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch((err) => {
    console.error('Falha ao conectar no MongoDB:', err);
  });
