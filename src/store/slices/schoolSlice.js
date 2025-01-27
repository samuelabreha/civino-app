import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { schoolApi } from '../../services/api/school';

const initialState = {
  schools: [],
  selectedSchool: null,
  loading: false,
  error: null
};

export const fetchSchools = createAsyncThunk(
  'school/fetchSchools',
  async (_, { rejectWithValue }) => {
    try {
      const response = await schoolApi.getSchools();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch schools');
    }
  }
);

export const fetchSchoolById = createAsyncThunk(
  'school/fetchSchoolById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await schoolApi.getSchoolById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch school');
    }
  }
);

export const createSchool = createAsyncThunk(
  'school/createSchool',
  async (schoolData, { rejectWithValue }) => {
    try {
      const response = await schoolApi.createSchool(schoolData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to create school');
    }
  }
);

export const updateSchool = createAsyncThunk(
  'school/updateSchool',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await schoolApi.updateSchool(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to update school');
    }
  }
);

export const deleteSchool = createAsyncThunk(
  'school/deleteSchool',
  async (id, { rejectWithValue }) => {
    try {
      await schoolApi.deleteSchool(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to delete school');
    }
  }
);

const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch schools
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
        state.error = action.error.message || 'Failed to fetch schools';
      })
      // Fetch school by id
      .addCase(fetchSchoolById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSchoolById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedSchool = action.payload;
      })
      .addCase(fetchSchoolById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch school';
      })
      // Create school
      .addCase(createSchool.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSchool.fulfilled, (state, action) => {
        state.loading = false;
        state.schools.push(action.payload);
      })
      .addCase(createSchool.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create school';
      })
      // Update school
      .addCase(updateSchool.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSchool.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.schools.findIndex(school => school.id === action.payload.id);
        if (index !== -1) {
          state.schools[index] = action.payload;
        }
      })
      .addCase(updateSchool.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update school';
      })
      // Delete school
      .addCase(deleteSchool.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSchool.fulfilled, (state, action) => {
        state.loading = false;
        state.schools = state.schools.filter(school => school.id !== action.payload);
      })
      .addCase(deleteSchool.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete school';
      });
  }
});

export const { clearError } = schoolSlice.actions;
export default schoolSlice.reducer;
