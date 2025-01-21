import authReducer, {
  login,
  register,
  logout,
  clearError,
  setUser,
} from '../authSlice';

describe('authSlice', () => {
  const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
  };

  it('should handle initial state', () => {
    expect(authReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('reducers', () => {
    it('should handle clearError', () => {
      const actual = authReducer(
        { ...initialState, error: 'test error' },
        clearError()
      );
      expect(actual.error).toBeNull();
    });

    it('should handle setUser', () => {
      const user = { id: 1, name: 'Test User' };
      const actual = authReducer(initialState, setUser(user));
      expect(actual.user).toEqual(user);
    });
  });

  describe('extra reducers', () => {
    describe('login', () => {
      it('should set loading true while action is pending', () => {
        const actual = authReducer(initialState, login.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should set user and token when action is fulfilled', () => {
        const payload = {
          user: { id: 1, name: 'Test User' },
          token: 'test-token',
        };
        const actual = authReducer(initialState, login.fulfilled(payload));
        expect(actual.loading).toBe(false);
        expect(actual.user).toEqual(payload.user);
        expect(actual.token).toEqual(payload.token);
      });

      it('should set error when action is rejected', () => {
        const error = 'Login failed';
        const actual = authReducer(initialState, login.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('register', () => {
      it('should set loading true while action is pending', () => {
        const actual = authReducer(initialState, register.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should set user and token when action is fulfilled', () => {
        const payload = {
          user: { id: 1, name: 'Test User' },
          token: 'test-token',
        };
        const actual = authReducer(initialState, register.fulfilled(payload));
        expect(actual.loading).toBe(false);
        expect(actual.user).toEqual(payload.user);
        expect(actual.token).toEqual(payload.token);
      });

      it('should set error when action is rejected', () => {
        const error = 'Registration failed';
        const actual = authReducer(initialState, register.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('logout', () => {
      it('should clear user and token when action is fulfilled', () => {
        const state = {
          ...initialState,
          user: { id: 1, name: 'Test User' },
          token: 'test-token',
        };
        const actual = authReducer(state, logout.fulfilled);
        expect(actual.user).toBeNull();
        expect(actual.token).toBeNull();
      });
    });
  });
});
