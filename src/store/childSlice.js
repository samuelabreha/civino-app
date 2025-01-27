import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunks for child actions
export const fetchChildren = createAsyncThunk('children/fetchChildren', async () => {
    // Simulate fetching children from an API
    return [{ id: 1, name: 'Child 1' }, { id: 2, name: 'Child 2' }];
});

export const addChild = createAsyncThunk('children/addChild', async (child) => {
    // Simulate adding a child
    return child;
});

const childSlice = createSlice({
    name: 'children',
    initialState: {
        children: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearError(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchChildren.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChildren.fulfilled, (state, action) => {
                state.loading = false;
                state.children = action.payload;
            })
            .addCase(fetchChildren.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addChild.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addChild.fulfilled, (state, action) => {
                state.loading = false;
                state.children.push(action.payload);
            })
            .addCase(addChild.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearError } = childSlice.actions;
export default childSlice.reducer;
