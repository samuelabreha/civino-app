import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { referenceApi } from '../../services/api/reference';

const initialState = {
  resources: [],
  selectedResource: null,
  searchResults: [],
  loading: false,
  error: null
};

export const fetchResources = createAsyncThunk(
  'reference/fetchResources',
  async (_, { rejectWithValue }) => {
    try {
      const response = await referenceApi.getResources();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch resources');
    }
  }
);

export const fetchResourceById = createAsyncThunk(
  'reference/fetchResourceById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await referenceApi.getResourceById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch resource');
    }
  }
);

export const createResource = createAsyncThunk(
  'reference/createResource',
  async (resourceData, { rejectWithValue }) => {
    try {
      const response = await referenceApi.createResource(resourceData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to create resource');
    }
  }
);

export const updateResource = createAsyncThunk(
  'reference/updateResource',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await referenceApi.updateResource(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to update resource');
    }
  }
);

export const deleteResource = createAsyncThunk(
  'reference/deleteResource',
  async (id, { rejectWithValue }) => {
    try {
      await referenceApi.deleteResource(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to delete resource');
    }
  }
);

export const searchResources = createAsyncThunk(
  'reference/searchResources',
  async (query, { rejectWithValue }) => {
    try {
      const response = await referenceApi.searchResources(query);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to search resources');
    }
  }
);

export const downloadResource = createAsyncThunk(
  'reference/downloadResource',
  async (id, { rejectWithValue }) => {
    try {
      const response = await referenceApi.downloadResource(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to download resource');
    }
  }
);

const referenceSlice = createSlice({
  name: 'reference',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch resources
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
        state.error = action.error.message || 'Failed to fetch resources';
      })
      // Fetch resource by id
      .addCase(fetchResourceById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchResourceById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedResource = action.payload;
      })
      .addCase(fetchResourceById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch resource';
      })
      // Create resource
      .addCase(createResource.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createResource.fulfilled, (state, action) => {
        state.loading = false;
        state.resources.push(action.payload);
      })
      .addCase(createResource.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create resource';
      })
      // Update resource
      .addCase(updateResource.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateResource.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.resources.findIndex(resource => resource.id === action.payload.id);
        if (index !== -1) {
          state.resources[index] = action.payload;
        }
        if (state.selectedResource?.id === action.payload.id) {
          state.selectedResource = action.payload;
        }
      })
      .addCase(updateResource.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update resource';
      })
      // Delete resource
      .addCase(deleteResource.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteResource.fulfilled, (state, action) => {
        state.loading = false;
        state.resources = state.resources.filter(resource => resource.id !== action.payload);
        if (state.selectedResource?.id === action.payload) {
          state.selectedResource = null;
        }
      })
      .addCase(deleteResource.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete resource';
      })
      // Search resources
      .addCase(searchResources.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchResources.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(searchResources.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to search resources';
      })
      // Download resource
      .addCase(downloadResource.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(downloadResource.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(downloadResource.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to download resource';
      });
  }
});

export const { clearError } = referenceSlice.actions;
export default referenceSlice.reducer;
