import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunks for authentication actions
export const login = createAsyncThunk('auth/login', async (userCredentials) => {
    // Simulate a login API call
    return { id: 1, name: 'Test User', token: 'test-token' };
});

export const register = createAsyncThunk('auth/register', async (userData) => {
    // Simulate a registration API call
    return { id: 1, name: 'Test User', token: 'test-token' };
});

export const logout = createAsyncThunk('auth/logout', async () => {
    // Simulate a logout API call
    return;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearError(state) {
            state.error = null;
        },
        setUser(state, action) {
            state.user = action.payload;
        },
        updateUser(state, action) {
            state.user = { ...state.user, ...action.payload };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.token = action.payload.token;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(logout.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.loading = false;
                state.user = null;
                state.token = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearError, setUser, updateUser } = authSlice.actions;
export default authSlice.reducer;
