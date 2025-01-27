const express = require('express');
const router = express.Router();

// Exemple de données pour les activités
const activities = [];

// Route pour obtenir toutes les activités
router.get('/', (req, res) => {
  res.json(activities);
});

// Route pour ajouter une nouvelle activité
router.post('/', (req, res) => {
  const newActivity = req.body;
  activities.push(newActivity);
  res.status(201).json(newActivity);
});

module.exports = router;
