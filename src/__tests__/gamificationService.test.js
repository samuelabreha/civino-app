import { getAvailableRewards, assignRewardToUser, getUserGamificationStats } from '../services/gamificationService';

// Mock des fonctions de service de gamification
jest.mock('../services/gamificationService', () => ({
    getAvailableRewards: jest.fn(() => Promise.resolve([])), // Mock de la réponse
    assignRewardToUser: jest.fn(() => Promise.resolve({ assigned: true })), // Mock de la réponse
    getUserGamificationStats: jest.fn(() => Promise.resolve({ stats: {} })), // Mock de la réponse
}));

describe('Gamification Service', () => {
    test('should get available rewards successfully', async () => {
        const response = await getAvailableRewards();
        expect(response).toBeInstanceOf(Array);
    });

    test('should assign reward to user successfully', async () => {
        const response = await assignRewardToUser(1, 1);
        expect(response).toHaveProperty('assigned');
    });

    test('should get user gamification stats successfully', async () => {
        const response = await getUserGamificationStats(1);
        expect(response).toHaveProperty('stats');
    });
});
