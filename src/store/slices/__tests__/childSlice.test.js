import childReducer, {
  fetchChildren,
  fetchChildById,
  createChild,
  updateChild,
  deleteChild,
  clearError,
} from '../childSlice';

describe('childSlice', () => {
  const initialState = {
    children: [],
    currentChild: null,
    loading: false,
    error: null,
  };

  it('should handle initial state', () => {
    expect(childReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('reducers', () => {
    it('should handle clearError', () => {
      const actual = childReducer(
        { ...initialState, error: 'test error' },
        clearError()
      );
      expect(actual.error).toBeNull();
    });
  });

  describe('extra reducers', () => {
    describe('fetchChildren', () => {
      it('should set loading true while action is pending', () => {
        const actual = childReducer(initialState, fetchChildren.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update children when action is fulfilled', () => {
        const children = [
          { id: 1, name: 'Child 1' },
          { id: 2, name: 'Child 2' },
        ];
        const actual = childReducer(initialState, fetchChildren.fulfilled(children));
        expect(actual.loading).toBe(false);
        expect(actual.children).toEqual(children);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch children';
        const actual = childReducer(initialState, fetchChildren.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('fetchChildById', () => {
      it('should set loading true while action is pending', () => {
        const actual = childReducer(initialState, fetchChildById.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update currentChild when action is fulfilled', () => {
        const child = { id: 1, name: 'Child 1' };
        const actual = childReducer(initialState, fetchChildById.fulfilled(child));
        expect(actual.loading).toBe(false);
        expect(actual.currentChild).toEqual(child);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch child';
        const actual = childReducer(initialState, fetchChildById.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('createChild', () => {
      it('should set loading true while action is pending', () => {
        const actual = childReducer(initialState, createChild.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should add child to children array when action is fulfilled', () => {
        const newChild = { id: 1, name: 'New Child' };
        const actual = childReducer(initialState, createChild.fulfilled(newChild));
        expect(actual.loading).toBe(false);
        expect(actual.children).toContainEqual(newChild);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to create child';
        const actual = childReducer(initialState, createChild.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('updateChild', () => {
      const existingState = {
        ...initialState,
        children: [
          { id: 1, name: 'Child 1' },
          { id: 2, name: 'Child 2' },
        ],
      };

      it('should set loading true while action is pending', () => {
        const actual = childReducer(existingState, updateChild.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update child in children array when action is fulfilled', () => {
        const updatedChild = { id: 1, name: 'Updated Child' };
        const actual = childReducer(existingState, updateChild.fulfilled(updatedChild));
        expect(actual.loading).toBe(false);
        expect(actual.children).toContainEqual(updatedChild);
        expect(actual.children.find(child => child.id === 1)).toEqual(updatedChild);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to update child';
        const actual = childReducer(existingState, updateChild.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('deleteChild', () => {
      const existingState = {
        ...initialState,
        children: [
          { id: 1, name: 'Child 1' },
          { id: 2, name: 'Child 2' },
        ],
      };

      it('should set loading true while action is pending', () => {
        const actual = childReducer(existingState, deleteChild.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should remove child from children array when action is fulfilled', () => {
        const actual = childReducer(existingState, deleteChild.fulfilled(1));
        expect(actual.loading).toBe(false);
        expect(actual.children).not.toContainEqual({ id: 1, name: 'Child 1' });
        expect(actual.children).toHaveLength(1);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to delete child';
        const actual = childReducer(existingState, deleteChild.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });
  });
});
