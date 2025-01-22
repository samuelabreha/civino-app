import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { communityApi } from '../../services/api/community';

const initialState = {
  events: [],
  selectedEvent: null,
  loading: false,
  error: null
};

export const fetchEvents = createAsyncThunk(
  'community/fetchEvents',
  async (_, { rejectWithValue }) => {
    try {
      const response = await communityApi.getEvents();
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to fetch events');
    }
  }
);

export const fetchEventById = createAsyncThunk(
  'community/fetchEventById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await communityApi.getEventById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to fetch event');
    }
  }
);

export const createEvent = createAsyncThunk(
  'community/createEvent',
  async (eventData, { rejectWithValue }) => {
    try {
      const response = await communityApi.createEvent(eventData);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to create event');
    }
  }
);

export const updateEvent = createAsyncThunk(
  'community/updateEvent',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await communityApi.updateEvent(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to update event');
    }
  }
);

export const deleteEvent = createAsyncThunk(
  'community/deleteEvent',
  async (id, { rejectWithValue }) => {
    try {
      await communityApi.deleteEvent(id);
      return id;
    } catch (error) {
      return rejectWithValue('Failed to delete event');
    }
  }
);

const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch events
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
        state.error = null;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch event by id
      .addCase(fetchEventById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEventById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedEvent = action.payload;
        state.error = null;
      })
      .addCase(fetchEventById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create event
      .addCase(createEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.events.push(action.payload);
        state.error = null;
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update event
      .addCase(updateEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateEvent.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.events.findIndex(event => event.id === action.payload.id);
        if (index !== -1) {
          state.events[index] = action.payload;
        }
        if (state.selectedEvent?.id === action.payload.id) {
          state.selectedEvent = action.payload;
        }
        state.error = null;
      })
      .addCase(updateEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete event
      .addCase(deleteEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.events = state.events.filter(event => event.id !== action.payload);
        if (state.selectedEvent?.id === action.payload) {
          state.selectedEvent = null;
        }
        state.error = null;
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearError } = communitySlice.actions;
export default communitySlice.reducer;
