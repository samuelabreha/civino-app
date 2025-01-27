import { createEvaluation, getUserEvaluations, updateEvaluation, deleteEvaluation } from '../services/evaluationService';

describe('Evaluation Service', () => {
    test('should create evaluation successfully', async () => {
        const response = await createEvaluation({
            userId: 1,
            score: 85,
            comments: 'Great job!'
        });
        expect(response).toHaveProperty('evaluationId');
    });

    test('should get user evaluations successfully', async () => {
        const response = await getUserEvaluations(1);
        expect(response).toBeInstanceOf(Array);
    });

    test('should update evaluation successfully', async () => {
        const response = await updateEvaluation(1, { score: 90 });
        expect(response).toHaveProperty('updated');
    });

    test('should delete evaluation successfully', async () => {
        const response = await deleteEvaluation(1);
        expect(response).toHaveProperty('deleted');
    });
});
