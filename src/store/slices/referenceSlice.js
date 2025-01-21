import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { referenceAPI } from '../../services/api/reference';

export const fetchResources = createAsyncThunk(
  'reference/fetchResources',
  async (_, { rejectWithValue }) => {
    try {
      const response = await referenceAPI.getResources();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'reference/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await referenceAPI.getCategories();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const uploadResource = createAsyncThunk(
  'reference/uploadResource',
  async ({ file, metadata }, { rejectWithValue }) => {
    try {
      const response = await referenceAPI.uploadResource(file, metadata);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateResource = createAsyncThunk(
  'reference/updateResource',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await referenceAPI.updateResource(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteResource = createAsyncThunk(
  'reference/deleteResource',
  async (id, { rejectWithValue }) => {
    try {
      await referenceAPI.deleteResource(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  resources: [],
  categories: [],
  loading: false,
  error: null,
  selectedResource: null,
};

const referenceSlice = createSlice({
  name: 'reference',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setSelectedResource: (state, action) => {
      state.selectedResource = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResources.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchResources.fulfilled, (state, action) => {
        state.loading = false;
        state.resources = action.payload;
      })
      .addCase(fetchResources.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(uploadResource.fulfilled, (state, action) => {
        state.resources.push(action.payload);
      })
      .addCase(updateResource.fulfilled, (state, action) => {
        const index = state.resources.findIndex((resource) => resource.id === action.payload.id);
        if (index !== -1) {
          state.resources[index] = action.payload;
        }
      })
      .addCase(deleteResource.fulfilled, (state, action) => {
        state.resources = state.resources.filter((resource) => resource.id !== action.payload);
      });
  },
});

export const { clearError, setSelectedResource } = referenceSlice.actions;
export default referenceSlice.reducer;
