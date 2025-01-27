import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunks for community actions
export const fetchEvents = createAsyncThunk('community/fetchEvents', async () => {
    // Simulate fetching events from an API
    return [{ id: 1, title: 'Event 1' }, { id: 2, title: 'Event 2' }];
});

export const createEvent = createAsyncThunk('community/createEvent', async (event) => {
    // Simulate creating an event
    return event;
});

const communitySlice = createSlice({
    name: 'community',
    initialState: {
        events: [],
        currentEvent: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearError(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.loading = false;
                state.events = action.payload;
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createEvent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createEvent.fulfilled, (state, action) => {
                state.loading = false;
                state.events.push(action.payload);
            })
            .addCase(createEvent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearError } = communitySlice.actions;
export default communitySlice.reducer;
