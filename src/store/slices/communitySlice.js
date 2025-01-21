import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { communityAPI } from '../../services/api/community';

export const fetchEvents = createAsyncThunk(
  'community/fetchEvents',
  async (_, { rejectWithValue }) => {
    try {
      const response = await communityAPI.getEvents();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createEvent = createAsyncThunk(
  'community/createEvent',
  async (eventData, { rejectWithValue }) => {
    try {
      const response = await communityAPI.createEvent(eventData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const joinEvent = createAsyncThunk(
  'community/joinEvent',
  async (eventId, { rejectWithValue }) => {
    try {
      const response = await communityAPI.joinEvent(eventId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const leaveEvent = createAsyncThunk(
  'community/leaveEvent',
  async (eventId, { rejectWithValue }) => {
    try {
      const response = await communityAPI.leaveEvent(eventId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  events: [],
  loading: false,
  error: null,
  selectedEvent: null,
};

const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setSelectedEvent: (state, action) => {
      state.selectedEvent = action.payload;
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
        state.error = action.payload;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.events.push(action.payload);
      })
      .addCase(joinEvent.fulfilled, (state, action) => {
        const index = state.events.findIndex((event) => event.id === action.payload.id);
        if (index !== -1) {
          state.events[index] = action.payload;
        }
      })
      .addCase(leaveEvent.fulfilled, (state, action) => {
        const index = state.events.findIndex((event) => event.id === action.payload.id);
        if (index !== -1) {
          state.events[index] = action.payload;
        }
      });
  },
});

export const { clearError, setSelectedEvent } = communitySlice.actions;
export default communitySlice.reducer;
