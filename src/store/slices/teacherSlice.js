import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { teacherApi } from '../../services/api/teacher';

const initialState = {
  teachers: [],
  selectedTeacher: null,
  teacherStats: null,
  loading: false,
  error: null
};

export const fetchTeachers = createAsyncThunk(
  'teacher/fetchTeachers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await teacherApi.getTeachers();
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to fetch teachers');
    }
  }
);

export const fetchTeacherById = createAsyncThunk(
  'teacher/fetchTeacherById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await teacherApi.getTeacherById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to fetch teacher');
    }
  }
);

export const createTeacher = createAsyncThunk(
  'teacher/createTeacher',
  async (teacherData, { rejectWithValue }) => {
    try {
      const response = await teacherApi.createTeacher(teacherData);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to create teacher');
    }
  }
);

export const updateTeacher = createAsyncThunk(
  'teacher/updateTeacher',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await teacherApi.updateTeacher(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to update teacher');
    }
  }
);

export const deleteTeacher = createAsyncThunk(
  'teacher/deleteTeacher',
  async (id, { rejectWithValue }) => {
    try {
      await teacherApi.deleteTeacher(id);
      return id;
    } catch (error) {
      return rejectWithValue('Failed to delete teacher');
    }
  }
);

export const fetchTeacherStats = createAsyncThunk(
  'teacher/fetchTeacherStats',
  async (id, { rejectWithValue }) => {
    try {
      const response = await teacherApi.getTeacherStats(id);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to fetch teacher stats');
    }
  }
);

const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    setSelectedTeacher: (state, action) => {
      state.selectedTeacher = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch teachers
      .addCase(fetchTeachers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.teachers = action.payload;
        state.error = null;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch teacher by id
      .addCase(fetchTeacherById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeacherById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedTeacher = action.payload;
        state.error = null;
      })
      .addCase(fetchTeacherById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create teacher
      .addCase(createTeacher.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.teachers.push(action.payload);
        state.error = null;
      })
      .addCase(createTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update teacher
      .addCase(updateTeacher.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTeacher.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.teachers.findIndex(teacher => teacher.id === action.payload.id);
        if (index !== -1) {
          state.teachers[index] = action.payload;
        }
        if (state.selectedTeacher?.id === action.payload.id) {
          state.selectedTeacher = action.payload;
        }
        state.error = null;
      })
      .addCase(updateTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete teacher
      .addCase(deleteTeacher.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.teachers = state.teachers.filter(teacher => teacher.id !== action.payload);
        if (state.selectedTeacher?.id === action.payload) {
          state.selectedTeacher = null;
        }
        state.error = null;
      })
      .addCase(deleteTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch teacher stats
      .addCase(fetchTeacherStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeacherStats.fulfilled, (state, action) => {
        state.loading = false;
        state.teacherStats = action.payload;
        state.error = null;
      })
      .addCase(fetchTeacherStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { setSelectedTeacher, clearError } = teacherSlice.actions;
export default teacherSlice.reducer;
