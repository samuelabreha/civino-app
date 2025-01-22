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
      return rejectWithValue('Failed to fetch schools');
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
      return rejectWithValue('Failed to fetch school');
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
      return rejectWithValue('Failed to create school');
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
      return rejectWithValue('Failed to update school');
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
      return rejectWithValue('Failed to delete school');
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
        state.error = null;
      })
      .addCase(fetchSchools.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch school by id
      .addCase(fetchSchoolById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSchoolById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedSchool = action.payload;
        state.error = null;
      })
      .addCase(fetchSchoolById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create school
      .addCase(createSchool.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSchool.fulfilled, (state, action) => {
        state.loading = false;
        state.schools.push(action.payload);
        state.error = null;
      })
      .addCase(createSchool.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
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
        if (state.selectedSchool?.id === action.payload.id) {
          state.selectedSchool = action.payload;
        }
        state.error = null;
      })
      .addCase(updateSchool.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete school
      .addCase(deleteSchool.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSchool.fulfilled, (state, action) => {
        state.loading = false;
        state.schools = state.schools.filter(school => school.id !== action.payload);
        if (state.selectedSchool?.id === action.payload) {
          state.selectedSchool = null;
        }
        state.error = null;
      })
      .addCase(deleteSchool.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearError } = schoolSlice.actions;
export default schoolSlice.reducer;
