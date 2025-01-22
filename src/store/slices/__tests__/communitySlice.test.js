import { createAsyncThunk } from '@reduxjs/toolkit';
import communityReducer, {
  fetchEvents,
  fetchEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  joinEvent,
  leaveEvent,
  clearError,
} from '../communitySlice';

// Mock async thunks
const mockFetchEvents = createAsyncThunk(
  'community/fetchEvents',
  async (events) => events
);

const mockFetchEventById = createAsyncThunk(
  'community/fetchEventById',
  async (event) => event
);

const mockCreateEvent = createAsyncThunk(
  'community/createEvent',
  async (event) => event
);

const mockUpdateEvent = createAsyncThunk(
  'community/updateEvent',
  async (event) => event
);

const mockDeleteEvent = createAsyncThunk(
  'community/deleteEvent',
  async (id) => id
);

const mockJoinEvent = createAsyncThunk(
  'community/joinEvent',
  async (event) => event
);

const mockLeaveEvent = createAsyncThunk(
  'community/leaveEvent',
  async (event) => event
);

describe('communitySlice', () => {
  const initialState = {
    events: [],
    currentEvent: null,
    loading: false,
    error: null,
  };

  const existingState = {
    events: [
      { id: 1, title: 'Event 1' },
      { id: 2, title: 'Event 2' },
    ],
    currentEvent: null,
    loading: false,
    error: null,
  };

  it('should handle initial state', () => {
    expect(communityReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('reducers', () => {
    it('should handle clearError', () => {
      const actual = communityReducer(
        { ...initialState, error: 'test error' },
        clearError()
      );
      expect(actual.error).toBeNull();
    });
  });

  describe('extra reducers', () => {
    describe('fetchEvents', () => {
      it('should set loading true while action is pending', () => {
        const actual = communityReducer(initialState, mockFetchEvents.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update events when action is fulfilled', () => {
        const events = [
          { id: 1, title: 'Event 1' },
          { id: 2, title: 'Event 2' },
        ];
        const actual = communityReducer(
          initialState,
          mockFetchEvents.fulfilled(events)
        );
        expect(actual.loading).toBe(false);
        expect(actual.events).toEqual(events);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch events';
        const actual = communityReducer(
          initialState,
          mockFetchEvents.rejected(new Error(error))
        );
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('fetchEventById', () => {
      it('should set loading true while action is pending', () => {
        const actual = communityReducer(initialState, mockFetchEventById.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update currentEvent when action is fulfilled', () => {
        const event = { id: 1, title: 'Event 1' };
        const actual = communityReducer(
          initialState,
          mockFetchEventById.fulfilled(event)
        );
        expect(actual.loading).toBe(false);
        expect(actual.currentEvent).toEqual(event);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch event';
        const actual = communityReducer(
          initialState,
          mockFetchEventById.rejected(new Error(error))
        );
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('createEvent', () => {
      it('should set loading true while action is pending', () => {
        const actual = communityReducer(initialState, mockCreateEvent.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should add event to events array when action is fulfilled', () => {
        const newEvent = { id: 1, title: 'New Event' };
        const actual = communityReducer(
          initialState,
          mockCreateEvent.fulfilled(newEvent)
        );
        expect(actual.loading).toBe(false);
        expect(actual.events).toContainEqual(newEvent);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to create event';
        const actual = communityReducer(
          initialState,
          mockCreateEvent.rejected(new Error(error))
        );
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('updateEvent', () => {
      it('should set loading true while action is pending', () => {
        const actual = communityReducer(existingState, mockUpdateEvent.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update event in events array when action is fulfilled', () => {
        const updatedEvent = { id: 1, title: 'Updated Event 1' };
        const actual = communityReducer(
          existingState,
          mockUpdateEvent.fulfilled(updatedEvent)
        );
        expect(actual.loading).toBe(false);
        expect(actual.events).toContainEqual(updatedEvent);
        expect(actual.events.find(event => event.id === 1)).toEqual(updatedEvent);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to update event';
        const actual = communityReducer(
          existingState,
          mockUpdateEvent.rejected(new Error(error))
        );
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('deleteEvent', () => {
      it('should set loading true while action is pending', () => {
        const actual = communityReducer(existingState, mockDeleteEvent.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should remove event from events array when action is fulfilled', () => {
        const actual = communityReducer(
          existingState,
          mockDeleteEvent.fulfilled(1)
        );
        expect(actual.loading).toBe(false);
        expect(actual.events).not.toContainEqual({ id: 1, title: 'Event 1' });
        expect(actual.events).toHaveLength(1);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to delete event';
        const actual = communityReducer(
          existingState,
          mockDeleteEvent.rejected(new Error(error))
        );
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('joinEvent', () => {
      it('should update event participants when action is fulfilled', () => {
        const updatedEvent = {
          id: 1,
          title: 'Event 1',
          participants: [{ id: 1, name: 'User 1' }],
        };
        const actual = communityReducer(
          initialState,
          mockJoinEvent.fulfilled(updatedEvent)
        );
        expect(actual.loading).toBe(false);
        expect(actual.currentEvent).toEqual(updatedEvent);
      });
    });

    describe('leaveEvent', () => {
      it('should update event participants when action is fulfilled', () => {
        const updatedEvent = {
          id: 1,
          title: 'Event 1',
          participants: [],
        };
        const actual = communityReducer(
          initialState,
          mockLeaveEvent.fulfilled(updatedEvent)
        );
        expect(actual.loading).toBe(false);
        expect(actual.currentEvent).toEqual(updatedEvent);
      });
    });
  });
});
