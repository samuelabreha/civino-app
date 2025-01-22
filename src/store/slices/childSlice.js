import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { childAPI } from '../../services/api/child';

export const fetchChildren = createAsyncThunk(
  'child/fetchChildren',
  async (_, { rejectWithValue }) => {
    try {
      const response = await childAPI.getAll();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addChild = createAsyncThunk(
  'child/addChild',
  async (childData, { rejectWithValue }) => {
    try {
      const response = await childAPI.create(childData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateChild = createAsyncThunk(
  'child/updateChild',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await childAPI.update(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteChild = createAsyncThunk(
  'child/deleteChild',
  async (id, { rejectWithValue }) => {
    try {
      await childAPI.delete(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  children: [],
  loading: false,
  error: null,
  selectedChild: null,
};

const childSlice = createSlice({
  name: 'child',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setSelectedChild: (state, action) => {
      state.selectedChild = action.payload;
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
        state.error = action.payload;
      })
      .addCase(addChild.fulfilled, (state, action) => {
        state.children.push(action.payload);
      })
      .addCase(updateChild.fulfilled, (state, action) => {
        const index = state.children.findIndex((child) => child.id === action.payload.id);
        if (index !== -1) {
          state.children[index] = action.payload;
        }
      })
      .addCase(deleteChild.fulfilled, (state, action) => {
        state.children = state.children.filter((child) => child.id !== action.payload);
      });
  },
});

export const { clearError, setSelectedChild } = childSlice.actions;
export default childSlice.reducer;
