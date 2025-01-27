import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async actions
export const fetchDocuments = createAsyncThunk('documents/fetchDocuments', async () => {
  // Logic to fetch documents
});

export const addDocument = createAsyncThunk('documents/addDocument', async (document) => {
  // Logic to add a document
});

export const updateDocument = createAsyncThunk('documents/updateDocument', async (document) => {
  // Logic to update a document
});

export const deleteDocument = createAsyncThunk('documents/deleteDocument', async (documentId) => {
  // Logic to delete a document
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDocuments.fulfilled, (state, action) => {
        state.loading = false;
        state.documents = action.payload;
      })
      .addCase(fetchDocuments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || 'Failed to fetch documents';
      })
      .addCase(addDocument.fulfilled, (state, action) => {
        state.loading = false;
        state.documents.push(action.payload);
      })
      .addCase(addDocument.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || 'Failed to add document';
      })
      .addCase(updateDocument.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.documents.findIndex(doc => doc.id === action.payload.id);
        if (index !== -1) {
          state.documents[index] = action.payload;
        }
      })
      .addCase(updateDocument.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || 'Failed to update document';
      })
      .addCase(deleteDocument.fulfilled, (state, action) => {
        state.loading = false;
        state.documents = state.documents.filter(doc => doc.id !== action.payload);
      })
      .addCase(deleteDocument.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || 'Failed to delete document';
      });
  },
});

export const { clearError } = documentSlice.actions;
export default documentSlice.reducer;
