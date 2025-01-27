import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunks for reference actions
export const fetchReferences = createAsyncThunk('references/fetchReferences', async () => {
    // Simulate fetching references from an API
    return [{ id: 1, title: 'Reference 1' }, { id: 2, title: 'Reference 2' }];
});

export const addReference = createAsyncThunk('references/addReference', async (reference) => {
    // Simulate adding a reference
    return reference;
});

const referenceSlice = createSlice({
    name: 'references',
    initialState: {
        references: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearError(state) {
            state.error = null;
        },
        addReferenceManually(state, action) {
            state.references.push(action.payload);
        },
        fetchReferencesSuccess(state, action) {
            state.references = action.payload;
        },
        addReferenceSuccess(state, action) {
            state.references.push(action.payload);
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchReferences.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchReferences.fulfilled, (state, action) => {
                state.loading = false;
                state.references = action.payload;
            })
            .addCase(fetchReferences.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addReference.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addReference.fulfilled, (state, action) => {
                state.loading = false;
                state.references.push(action.payload);
            })
            .addCase(addReference.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearError, addReferenceManually, fetchReferencesSuccess, addReferenceSuccess, setLoading, setError } = referenceSlice.actions;
export default referenceSlice.reducer;
