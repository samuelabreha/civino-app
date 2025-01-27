const authController = require('../authController');

describe('Auth Controller', () => {
  test('should return user data on successful login', async () => {
    const req = { body: { username: 'testuser', password: 'testpass' } };
    const res = { json: jest.fn() };
    const next = jest.fn();

    await authController.login(req, res, next);

    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      username: 'testuser',
      // Ajoutez d'autres propriétés à vérifier
    }));
  });

  test('should return error on failed login', async () => {
    const req = { body: { username: 'wronguser', password: 'wrongpass' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    await authController.login(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid credentials' });
  });
});
