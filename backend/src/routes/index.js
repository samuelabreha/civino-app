const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

// Routes d'authentification
router.post('/auth/login', authController.login);
router.post('/auth/register', authController.register);

// Routes protégées
router.use('/users', auth, require('./userRoutes'));
router.use('/activities', auth, require('./activityRoutes'));
router.use('/documents', auth, require('./documentRoutes'));
router.use('/evaluations', auth, require('./evaluationRoutes'));

module.exports = router;
