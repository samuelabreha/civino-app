import { getUserAnalytics, getAppUsageStats, getUserPerformanceReports, getOverallUsageStatistics } from '../services/dataAnalysisService';

describe('Data Analysis Service', () => {
    test('should fetch user analytics successfully', async () => {
        const data = await getUserAnalytics(1);
        expect(data).toHaveProperty('usage');
    });

    test('should fetch app usage stats successfully', async () => {
        const data = await getAppUsageStats();
        expect(data).toHaveProperty('totalUsers');
    });

    test('should fetch user performance reports', async () => {
        const userId = 1;
        const data = await getUserPerformanceReports(userId);
        expect(data).toBeDefined();
    });

    test('should fetch overall usage statistics', async () => {
        const data = await getOverallUsageStatistics();
        expect(data).toBeDefined();
    });
});
