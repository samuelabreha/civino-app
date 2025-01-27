import documentReducer, { fetchDocuments, addDocument, updateDocument, deleteDocument, clearError } from '../documentSlice';
import axios from 'axios';

jest.mock('axios');

const initialState = {
  documents: [],
  loading: false,
  error: null,
};

describe('documentSlice', () => {
  it('should handle initial state', () => {
    expect(documentReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('reducers', () => {
    it('should handle clearError', () => {
      const state = { ...initialState, error: 'some error' };
      expect(documentReducer(state, clearError())).toEqual({
        ...state,
        error: null,
      });
    });
  });

  describe('extra reducers', () => {
    describe('fetchDocuments', () => {
      it('should set loading true when action is pending', () => {
        const actual = documentReducer(initialState, fetchDocuments.pending());
        expect(actual.loading).toBe(true);
      });

      it('should set documents when action is fulfilled', () => {
        const documents = [{ id: 1, title: 'Document 1' }];
        axios.get.mockResolvedValue({ data: documents });
        const actual = documentReducer(initialState, fetchDocuments.fulfilled(documents));
        expect(actual.loading).toBe(false);
        expect(actual.documents).toEqual(documents);
        expect(actual.error).toBeNull();
      });

      it('should set error when action is rejected', () => {
        axios.get.mockRejectedValue({ response: { data: { error: 'Failed to fetch documents' } } });
        const error = 'Failed to fetch documents';
        const actual = documentReducer(initialState, fetchDocuments.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toBe(error);
      });
    });

    describe('addDocument', () => {
      it('should set loading true when action is pending', () => {
        const actual = documentReducer(initialState, addDocument.pending());
        expect(actual.loading).toBe(true);
      });

      it('should add document when action is fulfilled', () => {
        const document = { id: 1, title: 'Document 1' };
        const actual = documentReducer(initialState, addDocument.fulfilled(document));
        expect(actual.loading).toBe(false);
        expect(actual.documents).toEqual([document]);
        expect(actual.error).toBeNull();
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to add document';
        const actual = documentReducer(initialState, addDocument.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toBe(error);
      });
    });

    describe('updateDocument', () => {
      it('should set loading true when action is pending', () => {
        const actual = documentReducer(initialState, updateDocument.pending());
        expect(actual.loading).toBe(true);
      });

      it('should update document when action is fulfilled', () => {
        const document = { id: 1, title: 'Document 1' };
        const updatedDocument = { id: 1, title: 'Updated Document 1' };
        const actual = documentReducer({ ...initialState, documents: [document] }, updateDocument.fulfilled(updatedDocument));
        expect(actual.loading).toBe(false);
        expect(actual.documents).toEqual([updatedDocument]);
        expect(actual.error).toBeNull();
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to update document';
        const actual = documentReducer(initialState, updateDocument.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toBe(error);
      });
    });

    describe('deleteDocument', () => {
      it('should set loading true when action is pending', () => {
        const actual = documentReducer(initialState, deleteDocument.pending());
        expect(actual.loading).toBe(true);
      });

      it('should remove document when action is fulfilled', () => {
        const document = { id: 1, title: 'Document 1' };
        const actual = documentReducer({ ...initialState, documents: [document] }, deleteDocument.fulfilled(document.id));
        expect(actual.loading).toBe(false);
        expect(actual.documents).toEqual([]);
        expect(actual.error).toBeNull();
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to delete document';
        const actual = documentReducer(initialState, deleteDocument.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toBe(error);
      });
    });
  });
});
