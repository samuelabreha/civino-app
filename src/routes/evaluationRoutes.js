import express from 'express';
import {
    createEvaluationController,
    getUserEvaluationsController,
    updateEvaluationController,
    deleteEvaluationController,
    calculateMedalsController,
    checkWeeklyRewardController,
    calculateOverallController,
    calculateMedalsNewController,
    checkRewardNewController
} from '../controllers/evaluationController';

const router = express.Router();

// Routes pour les évaluations
router.post('/', createEvaluationController);
router.get('/user/:userId', getUserEvaluationsController);
router.put('/:evaluationId', updateEvaluationController);
router.delete('/:evaluationId', deleteEvaluationController);

// Routes pour les nouvelles fonctionnalités
router.post('/calculate-medals', calculateMedalsController);
router.post('/check-reward', checkWeeklyRewardController);
router.post('/calculate-overall', calculateOverallController);
router.post('/calculate-medals-new', calculateMedalsNewController);
router.post('/check-reward-new', checkRewardNewController);

export default router;