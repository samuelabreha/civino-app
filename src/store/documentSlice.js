import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunks for document actions
export const fetchDocuments = createAsyncThunk('documents/fetchDocuments', async () => {
    // Simulate fetching documents from an API
    return [{ id: 1, title: 'Document 1' }, { id: 2, title: 'Document 2' }];
});

export const addDocument = createAsyncThunk('documents/addDocument', async (document) => {
    // Simulate adding a document
    return document;
});

const documentSlice = createSlice({
    name: 'documents',
    initialState: {
        documents: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearError(state) {
            state.error = null;
        },
        fetchDocument(state, action) {
            state.documents = action.payload;
        },
        addDocument(state, action) {
            state.documents.push(action.payload);
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
            .addCase(fetchDocuments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDocuments.fulfilled, (state, action) => {
                state.loading = false;
                state.documents = action.payload;
            })
            .addCase(fetchDocuments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addDocument.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addDocument.fulfilled, (state, action) => {
                state.loading = false;
                state.documents.push(action.payload);
            })
            .addCase(addDocument.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearError, fetchDocument, addDocument, setLoading, setError } = documentSlice.actions;
export default documentSlice.reducer;
