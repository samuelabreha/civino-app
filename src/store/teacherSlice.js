import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunks for teacher actions
export const fetchTeachers = createAsyncThunk('teachers/fetchTeachers', async () => {
    // Simulate fetching teachers from an API
    return [{ id: 1, name: 'Teacher 1' }, { id: 2, name: 'Teacher 2' }];
});

export const addTeacher = createAsyncThunk('teachers/addTeacher', async (teacher) => {
    // Simulate adding a teacher
    return teacher;
});

const teacherSlice = createSlice({
    name: 'teachers',
    initialState: {
        teachers: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearError(state) {
            state.error = null;
        },
        addTeacher(state, action) {
            state.teachers.push(action.payload);
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        fetchTeachersRequest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchTeachersSuccess(state, action) {
            state.loading = false;
            state.teachers = action.payload;
        },
        fetchTeachersFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        addTeacherRequest(state) {
            state.loading = true;
            state.error = null;
        },
        addTeacherSuccess(state, action) {
            state.loading = false;
            state.teachers.push(action.payload);
        },
        addTeacherFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
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
                state.error = action.error.message;
            })
            .addCase(addTeacher.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addTeacher.fulfilled, (state, action) => {
                state.loading = false;
                state.teachers.push(action.payload);
            })
            .addCase(addTeacher.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { 
    clearError, 
    addTeacher, 
    setLoading, 
    setError, 
    fetchTeachersRequest, 
    fetchTeachersSuccess, 
    fetchTeachersFailure, 
    addTeacherRequest, 
    addTeacherSuccess, 
    addTeacherFailure 
} = teacherSlice.actions;
export default teacherSlice.reducer;
