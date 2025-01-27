import { login, logout, register, refreshToken } from '../services/authService';
import axios from 'axios';

jest.mock('axios');

describe('Auth Service', () => {
    test('should login successfully', async () => {
        const user = { id: 1, name: 'User 1', token: 'abc123' };
        axios.post.mockResolvedValue({ data: user }); // Mock de la réponse

        const response = await login('username', 'password');
        expect(response).toEqual(user);
    });

    test('should register successfully', async () => {
        const newUser = { id: 2, name: 'User 2' };
        axios.post.mockResolvedValue({ data: newUser }); // Mock de la réponse

        const response = await register('username', 'password');
        expect(response).toEqual(newUser);
    });

    test('should refresh token successfully', async () => {
        const tokenResponse = { token: 'newToken' };
        axios.post.mockResolvedValue({ data: tokenResponse }); // Mock de la réponse

        const response = await refreshToken('someRefreshToken');
        expect(response).toHaveProperty('token');
    });

    test('should logout successfully', () => {
        logout();
        expect(localStorage.getItem('user')).toBeNull();
    });
});
