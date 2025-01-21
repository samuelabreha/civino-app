import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { schoolAPI } from '../../services/api/school';

export const fetchSchools = createAsyncThunk(
  'school/fetchSchools',
  async (_, { rejectWithValue }) => {
    try {
      const response = await schoolAPI.getAll();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addSchool = createAsyncThunk(
  'school/addSchool',
  async (schoolData, { rejectWithValue }) => {
    try {
      const response = await schoolAPI.create(schoolData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateSchool = createAsyncThunk(
  'school/updateSchool',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await schoolAPI.update(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchSchoolStats = createAsyncThunk(
  'school/fetchSchoolStats',
  async (id, { rejectWithValue }) => {
    try {
      const response = await schoolAPI.getStats(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  schools: [],
  loading: false,
  error: null,
  selectedSchool: null,
  schoolStats: null,
};

const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setSelectedSchool: (state, action) => {
      state.selectedSchool = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchools.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSchools.fulfilled, (state, action) => {
        state.loading = false;
        state.schools = action.payload;
      })
      .addCase(fetchSchools.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addSchool.fulfilled, (state, action) => {
        state.schools.push(action.payload);
      })
      .addCase(updateSchool.fulfilled, (state, action) => {
        const index = state.schools.findIndex((school) => school.id === action.payload.id);
        if (index !== -1) {
          state.schools[index] = action.payload;
        }
      })
      .addCase(fetchSchoolStats.fulfilled, (state, action) => {
        state.schoolStats = action.payload;
      });
  },
});

export const { clearError, setSelectedSchool } = schoolSlice.actions;
export default schoolSlice.reducer;
