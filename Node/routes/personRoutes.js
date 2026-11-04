const router = require('express').Router();
const Person = require('../models/Person');

//Criação de dados
// rotas da API
router.post('/', async (req, res) => {
  // req.body
  const { name, salary, approved } = req.body || {};

  if (!name) {
    return res.status(422).json({ error: 'O nome é obrigatório!' });
  }

  const person = {
    name,
    salary,
    approved,
  };  

  try {
    //criando dados
    await Person.create(person);
    res.status(201).json({ message: 'Pessoa inserida com sucesso!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Leitura de dados
router.get('/', async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const person = await Person.findOne({ _id: id });
    if (!person) {
      return res.status(422).json({ message: 'Pessoa não encontrada!' });
    }
    res.status(200).json(person);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const { name, salary, approved } = req.body || {};

    const person = {
    name,
    salary,
    approved,
  };

  try {
    const updatedPerson = await Person.findByIdAndUpdate(id, person, { new: true });
    if (!updatedPerson) {
      return res.status(422).json({ message: 'Pessoa não encontrada!' });
    }
    res.status(200).json(updatedPerson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
    try {
    const person = await Person.findOne({ _id: id });
    if (!person) {
      return res.status(422).json({ message: 'Pessoa não encontrada!' });
    }
    await Person.deleteOne({ _id: id });
    res.status(200).json({ message: 'Pessoa removida com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;