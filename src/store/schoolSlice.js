import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunks for school actions
export const fetchSchools = createAsyncThunk('school/fetchSchools', async () => {
    // Simulate an API call to fetch schools
    return [{ id: 1, name: 'School 1' }, { id: 2, name: 'School 2' }];
});

export const createSchool = createAsyncThunk('school/createSchool', async (schoolData) => {
    // Simulate an API call to create a school
    return { id: 3, ...schoolData };
});

export const updateSchool = createAsyncThunk('school/updateSchool', async (schoolData) => {
    // Simulate an API call to update a school
    return schoolData;
});

export const deleteSchool = createAsyncThunk('school/deleteSchool', async (schoolId) => {
    // Simulate an API call to delete a school
    return schoolId;
});

const schoolSlice = createSlice({
    name: 'school',
    initialState: {
        schools: [],
        selectedSchool: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSchools.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSchools.fulfilled, (state, action) => {
                state.loading = false;
                state.schools = action.payload;
            })
            .addCase(fetchSchools.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Add cases for create, update, and delete actions
    },
});

export default schoolSlice.reducer;
