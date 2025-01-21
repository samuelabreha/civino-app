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

describe('communitySlice', () => {
  const initialState = {
    events: [],
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
        const actual = communityReducer(initialState, fetchEvents.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update events when action is fulfilled', () => {
        const events = [
          { id: 1, title: 'Event 1' },
          { id: 2, title: 'Event 2' },
        ];
        const actual = communityReducer(initialState, fetchEvents.fulfilled(events));
        expect(actual.loading).toBe(false);
        expect(actual.events).toEqual(events);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch events';
        const actual = communityReducer(initialState, fetchEvents.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('fetchEventById', () => {
      it('should set loading true while action is pending', () => {
        const actual = communityReducer(initialState, fetchEventById.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update currentEvent when action is fulfilled', () => {
        const event = { id: 1, title: 'Event 1' };
        const actual = communityReducer(initialState, fetchEventById.fulfilled(event));
        expect(actual.loading).toBe(false);
        expect(actual.currentEvent).toEqual(event);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch event';
        const actual = communityReducer(initialState, fetchEventById.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('createEvent', () => {
      it('should set loading true while action is pending', () => {
        const actual = communityReducer(initialState, createEvent.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should add event to events array when action is fulfilled', () => {
        const newEvent = { id: 1, title: 'New Event' };
        const actual = communityReducer(initialState, createEvent.fulfilled(newEvent));
        expect(actual.loading).toBe(false);
        expect(actual.events).toContainEqual(newEvent);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to create event';
        const actual = communityReducer(initialState, createEvent.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('updateEvent', () => {
      const existingState = {
        ...initialState,
        events: [
          { id: 1, title: 'Event 1' },
          { id: 2, title: 'Event 2' },
        ],
      };

      it('should set loading true while action is pending', () => {
        const actual = communityReducer(existingState, updateEvent.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update event in events array when action is fulfilled', () => {
        const updatedEvent = { id: 1, title: 'Updated Event' };
        const actual = communityReducer(existingState, updateEvent.fulfilled(updatedEvent));
        expect(actual.loading).toBe(false);
        expect(actual.events).toContainEqual(updatedEvent);
        expect(actual.events.find(event => event.id === 1)).toEqual(updatedEvent);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to update event';
        const actual = communityReducer(existingState, updateEvent.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('deleteEvent', () => {
      const existingState = {
        ...initialState,
        events: [
          { id: 1, title: 'Event 1' },
          { id: 2, title: 'Event 2' },
        ],
      };

      it('should set loading true while action is pending', () => {
        const actual = communityReducer(existingState, deleteEvent.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should remove event from events array when action is fulfilled', () => {
        const actual = communityReducer(existingState, deleteEvent.fulfilled(1));
        expect(actual.loading).toBe(false);
        expect(actual.events).not.toContainEqual({ id: 1, title: 'Event 1' });
        expect(actual.events).toHaveLength(1);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to delete event';
        const actual = communityReducer(existingState, deleteEvent.rejected(null, '', error));
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
        const actual = communityReducer(initialState, joinEvent.fulfilled(updatedEvent));
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
        const actual = communityReducer(initialState, leaveEvent.fulfilled(updatedEvent));
        expect(actual.loading).toBe(false);
        expect(actual.currentEvent).toEqual(updatedEvent);
      });
    });
  });
});
