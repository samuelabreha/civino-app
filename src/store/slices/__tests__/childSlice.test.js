import childReducer, {
  clearError,
  setSelectedChild,
  fetchChildren,
  addChild,
  updateChild,
  deleteChild
} from '../childSlice';

const initialState = {
  children: [],
  selectedChild: null,
  loading: false,
  error: null
};

describe('childSlice', () => {
  it('should handle initial state', () => {
    expect(childReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('reducers', () => {
    it('should handle clearError', () => {
      const state = { ...initialState, error: 'some error' };
      expect(childReducer(state, clearError())).toEqual({
        ...state,
        error: null
      });
    });

    it('should handle setSelectedChild', () => {
      const child = { id: 1, name: 'Child 1' };
      expect(childReducer(initialState, setSelectedChild(child))).toEqual({
        ...initialState,
        selectedChild: child
      });
    });
  });

  describe('extra reducers', () => {
    describe('fetchChildren', () => {
      it('should set loading true while action is pending', () => {
        const actual = childReducer(initialState, { type: fetchChildren.pending.type });
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update children array when action is fulfilled', () => {
        const children = [
          { id: 1, name: 'Child 1' },
          { id: 2, name: 'Child 2' }
        ];
        const actual = childReducer(initialState, { 
          type: fetchChildren.fulfilled.type,
          payload: children
        });
        expect(actual.loading).toBe(false);
        expect(actual.children).toEqual(children);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch children';
        const actual = childReducer(initialState, {
          type: fetchChildren.rejected.type,
          payload: error
        });
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('addChild', () => {
      it('should add child to children array when action is fulfilled', () => {
        const newChild = { id: 1, name: 'New Child' };
        const actual = childReducer(initialState, {
          type: addChild.fulfilled.type,
          payload: newChild
        });
        expect(actual.children).toContainEqual(newChild);
      });
    });

    describe('updateChild', () => {
      const existingState = {
        ...initialState,
        children: [{ id: 1, name: 'Old Name' }]
      };

      it('should update existing child when action is fulfilled', () => {
        const updatedChild = { id: 1, name: 'New Name' };
        const actual = childReducer(existingState, {
          type: updateChild.fulfilled.type,
          payload: updatedChild
        });
        expect(actual.children[0]).toEqual(updatedChild);
      });
    });

    describe('deleteChild', () => {
      const existingState = {
        ...initialState,
        children: [{ id: 1, name: 'Child 1' }]
      };

      it('should remove child from children array when action is fulfilled', () => {
        const actual = childReducer(existingState, {
          type: deleteChild.fulfilled.type,
          payload: 1
        });
        expect(actual.children).toHaveLength(0);
      });
    });
  });
});
