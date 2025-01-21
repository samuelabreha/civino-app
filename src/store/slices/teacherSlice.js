import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { teacherAPI } from '../../services/api/teacher';

export const fetchTeachers = createAsyncThunk(
  'teacher/fetchTeachers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await teacherAPI.getAll();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addTeacher = createAsyncThunk(
  'teacher/addTeacher',
  async (teacherData, { rejectWithValue }) => {
    try {
      const response = await teacherAPI.create(teacherData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateTeacher = createAsyncThunk(
  'teacher/updateTeacher',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await teacherAPI.update(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchTeacherStats = createAsyncThunk(
  'teacher/fetchTeacherStats',
  async (id, { rejectWithValue }) => {
    try {
      const response = await teacherAPI.getStats(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  teachers: [],
  loading: false,
  error: null,
  selectedTeacher: null,
  teacherStats: null,
};

const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setSelectedTeacher: (state, action) => {
      state.selectedTeacher = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.teachers = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addTeacher.fulfilled, (state, action) => {
        state.teachers.push(action.payload);
      })
      .addCase(updateTeacher.fulfilled, (state, action) => {
        const index = state.teachers.findIndex((teacher) => teacher.id === action.payload.id);
        if (index !== -1) {
          state.teachers[index] = action.payload;
        }
      })
      .addCase(fetchTeacherStats.fulfilled, (state, action) => {
        state.teacherStats = action.payload;
      });
  },
});

export const { clearError, setSelectedTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;
