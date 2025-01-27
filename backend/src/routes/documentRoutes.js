const express = require('express');
const router = express.Router();

// Exemple de données pour les documents
const documents = [];

// Route pour obtenir tous les documents
router.get('/', (req, res) => {
  res.json(documents);
});

// Route pour ajouter un nouveau document
router.post('/', (req, res) => {
  const newDocument = req.body;
  documents.push(newDocument);
  res.status(201).json(newDocument);
});

module.exports = router;
