import { getUserNotifications, markNotificationAsRead, deleteNotification } from '../services/notificationService';
import axios from 'axios';

jest.mock('axios');

describe('Notification Service', () => {
    test('should get user notifications successfully', async () => {
        const notifications = [{ id: 1, message: 'Notification 1' }];
        axios.get.mockResolvedValue({ data: notifications }); // Mock de la réponse

        const response = await getUserNotifications(1);
        expect(response).toEqual(notifications);
    });

    test('should mark notification as read successfully', async () => {
        axios.patch.mockResolvedValue({ data: { id: 1, read: true } }); // Mock de la réponse

        const response = await markNotificationAsRead(1);
        expect(response).toEqual({ id: 1, read: true });
    });

    test('should handle error when marking notification as read', async () => {
        const errorMessage = 'Error marking notification as read';
        axios.patch.mockRejectedValue(new Error(errorMessage)); // Simuler une erreur

        await expect(markNotificationAsRead(1)).rejects.toThrow(errorMessage);
    });

    test('should delete notification successfully', async () => {
        axios.delete.mockResolvedValue({}); // Mock de la réponse

        const response = await deleteNotification(1);
        expect(response).toBeUndefined();
    });
});
