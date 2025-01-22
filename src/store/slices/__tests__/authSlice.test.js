import authReducer, {
  login,
  register,
  logout,
  clearError,
  setUser
} from '../authSlice';

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null
};

describe('authSlice', () => {
  it('should handle initial state', () => {
    expect(authReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('reducers', () => {
    it('should handle clearError', () => {
      const state = { ...initialState, error: 'some error' };
      expect(authReducer(state, clearError())).toEqual({
        ...state,
        error: null
      });
    });

    it('should handle setUser', () => {
      const user = { id: 1, name: 'Test User' };
      expect(authReducer(initialState, setUser(user))).toEqual({
        ...initialState,
        user
      });
    });
  });

  describe('extra reducers', () => {
    describe('login', () => {
      it('should set loading true while action is pending', () => {
        const action = { type: login.pending.type };
        const state = authReducer(initialState, action);
        expect(state.loading).toBe(true);
        expect(state.error).toBeNull();
      });

      it('should update user and token when action is fulfilled', () => {
        const payload = {
          user: { id: 1, name: 'Test User' },
          token: 'test-token'
        };
        const action = { type: login.fulfilled.type, payload };
        const state = authReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.user).toEqual(payload.user);
        expect(state.token).toEqual(payload.token);
      });

      it('should set error when action is rejected', () => {
        const error = 'Login failed';
        const action = { type: login.rejected.type, payload: error };
        const state = authReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toEqual(error);
      });
    });

    describe('register', () => {
      it('should set loading true while action is pending', () => {
        const action = { type: register.pending.type };
        const state = authReducer(initialState, action);
        expect(state.loading).toBe(true);
        expect(state.error).toBeNull();
      });

      it('should update user and token when action is fulfilled', () => {
        const payload = {
          user: { id: 1, name: 'Test User' },
          token: 'test-token'
        };
        const action = { type: register.fulfilled.type, payload };
        const state = authReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.user).toEqual(payload.user);
        expect(state.token).toEqual(payload.token);
      });

      it('should set error when action is rejected', () => {
        const error = 'Registration failed';
        const action = { type: register.rejected.type, payload: error };
        const state = authReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toEqual(error);
      });
    });

    describe('logout', () => {
      const loggedInState = {
        ...initialState,
        user: { id: 1, name: 'Test User' },
        token: 'test-token'
      };

      it('should set loading true while action is pending', () => {
        const action = { type: logout.pending.type };
        const state = authReducer(loggedInState, action);
        expect(state.loading).toBe(true);
        expect(state.error).toBeNull();
      });

      it('should clear user and token when action is fulfilled', () => {
        const action = { type: logout.fulfilled.type };
        const state = authReducer(loggedInState, action);
        expect(state.loading).toBe(false);
        expect(state.user).toBeNull();
        expect(state.token).toBeNull();
      });

      it('should set error when action is rejected', () => {
        const error = 'Logout failed';
        const action = { type: logout.rejected.type, payload: error };
        const state = authReducer(loggedInState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toEqual(error);
      });
    });
  });
});
