import referenceReducer, {
  fetchResources,
  fetchResourceById,
  createResource,
  updateResource,
  deleteResource,
  searchResources,
  downloadResource,
  clearError,
} from '../referenceSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    reference: referenceReducer,
  },
});

describe('referenceSlice', () => {
  const initialState = {
    resources: [],
    currentResource: null,
    searchResults: [],
    loading: false,
    error: null,
  };

  it('should handle initial state', () => {
    expect(referenceReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('reducers', () => {
    it('should handle clearError', () => {
      const actual = referenceReducer(
        { ...initialState, error: 'test error' },
        clearError()
      );
      expect(actual.error).toBeNull();
    });
  });

  describe('extra reducers', () => {
    describe('fetchResources', () => {
      it('should set loading true while action is pending', () => {
        const actual = referenceReducer(initialState, fetchResources.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update resources when action is fulfilled', () => {
        const resources = [
          { id: 1, title: 'Resource 1' },
          { id: 2, title: 'Resource 2' },
        ];
        const actual = referenceReducer(initialState, fetchResources.fulfilled(resources));
        expect(actual.loading).toBe(false);
        expect(actual.resources).toEqual(resources);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch resources';
        const actual = referenceReducer(initialState, fetchResources.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('fetchResourceById', () => {
      it('should set loading true while action is pending', () => {
        const actual = referenceReducer(initialState, fetchResourceById.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update currentResource when action is fulfilled', () => {
        const resource = { id: 1, title: 'Resource 1' };
        const actual = referenceReducer(initialState, fetchResourceById.fulfilled(resource));
        expect(actual.loading).toBe(false);
        expect(actual.currentResource).toEqual(resource);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch resource';
        const actual = referenceReducer(initialState, fetchResourceById.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('createResource', () => {
      it('should set loading true while action is pending', () => {
        const actual = referenceReducer(initialState, createResource.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should add resource to resources array when action is fulfilled', () => {
        const newResource = { id: 1, title: 'New Resource' };
        const actual = referenceReducer(initialState, createResource.fulfilled(newResource));
        expect(actual.loading).toBe(false);
        expect(actual.resources).toContainEqual(newResource);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to create resource';
        const actual = referenceReducer(initialState, createResource.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('updateResource', () => {
      const existingState = {
        ...initialState,
        resources: [
          { id: 1, title: 'Resource 1' },
          { id: 2, title: 'Resource 2' },
        ],
      };

      it('should set loading true while action is pending', () => {
        const actual = referenceReducer(existingState, updateResource.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update resource in resources array when action is fulfilled', () => {
        const updatedResource = { id: 1, title: 'Updated Resource' };
        const actual = referenceReducer(existingState, updateResource.fulfilled(updatedResource));
        expect(actual.loading).toBe(false);
        expect(actual.resources).toContainEqual(updatedResource);
        expect(actual.resources.find(resource => resource.id === 1)).toEqual(updatedResource);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to update resource';
        const actual = referenceReducer(existingState, updateResource.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('deleteResource', () => {
      const existingState = {
        ...initialState,
        resources: [
          { id: 1, title: 'Resource 1' },
          { id: 2, title: 'Resource 2' },
        ],
      };

      it('should set loading true while action is pending', () => {
        const actual = referenceReducer(existingState, deleteResource.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should remove resource from resources array when action is fulfilled', () => {
        const actual = referenceReducer(existingState, deleteResource.fulfilled(1));
        expect(actual.loading).toBe(false);
        expect(actual.resources).not.toContainEqual({ id: 1, title: 'Resource 1' });
        expect(actual.resources).toHaveLength(1);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to delete resource';
        const actual = referenceReducer(existingState, deleteResource.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('searchResources', () => {
      it('should set loading true while action is pending', () => {
        const actual = referenceReducer(initialState, searchResources.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update searchResults when action is fulfilled', () => {
        const results = [
          { id: 1, title: 'Resource 1', relevance: 0.9 },
          { id: 2, title: 'Resource 2', relevance: 0.8 },
        ];
        const actual = referenceReducer(initialState, searchResources.fulfilled(results));
        expect(actual.loading).toBe(false);
        expect(actual.searchResults).toEqual(results);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to search resources';
        const actual = referenceReducer(initialState, searchResources.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('downloadResource', () => {
      it('should set loading true while action is pending', () => {
        const actual = referenceReducer(initialState, downloadResource.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should handle successful download when action is fulfilled', () => {
        const actual = referenceReducer(initialState, downloadResource.fulfilled());
        expect(actual.loading).toBe(false);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to download resource';
        const actual = referenceReducer(initialState, downloadResource.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });
  });
});
