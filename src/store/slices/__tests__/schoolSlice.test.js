import schoolReducer, {
  fetchSchools,
  fetchSchoolById,
  createSchool,
  updateSchool,
  deleteSchool,
} from '../schoolSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    school: schoolReducer,
  },
});

describe('schoolSlice', () => {
  const initialState = {
    schools: [],
    selectedSchool: null,
    loading: false,
    error: null,
  };

  it('should handle initial state', () => {
    expect(schoolReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('reducers', () => {
    it('should handle clearError', () => {
      const state = {
        ...initialState,
        error: 'Some error',
      };
      expect(
        schoolReducer(state, { type: 'school/clearError' })
      ).toEqual({
        ...state,
        error: null,
      });
    });
  });

  describe('extra reducers', () => {
    describe('fetchSchools', () => {
      it('should set loading true when action is pending', () => {
        const actual = schoolReducer(initialState, fetchSchools.pending());
        expect(actual.loading).toBe(true);
        expect(actual.error).toBe(null);
      });

      it('should update schools when action is fulfilled', () => {
        const schools = [{ id: 1, name: 'School 1' }];
        const actual = schoolReducer(initialState, fetchSchools.fulfilled(schools));
        expect(actual.loading).toBe(false);
        expect(actual.schools).toEqual(schools);
        expect(actual.error).toBe(null);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch schools';
        const actual = schoolReducer(initialState, fetchSchools.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toBe(error);
      });
    });

    describe('fetchSchoolById', () => {
      it('should set loading true when action is pending', () => {
        const actual = schoolReducer(initialState, fetchSchoolById.pending());
        expect(actual.loading).toBe(true);
        expect(actual.error).toBe(null);
      });

      it('should update selectedSchool when action is fulfilled', () => {
        const school = { id: 1, name: 'School 1' };
        const actual = schoolReducer(initialState, fetchSchoolById.fulfilled(school));
        expect(actual.loading).toBe(false);
        expect(actual.selectedSchool).toEqual(school);
        expect(actual.error).toBe(null);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch school';
        const actual = schoolReducer(initialState, fetchSchoolById.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toBe(error);
      });
    });

    describe('createSchool', () => {
      it('should set loading true when action is pending', () => {
        const actual = schoolReducer(initialState, createSchool.pending());
        expect(actual.loading).toBe(true);
        expect(actual.error).toBe(null);
      });

      it('should add school when action is fulfilled', () => {
        const school = { id: 1, name: 'School 1' };
        const actual = schoolReducer(initialState, createSchool.fulfilled(school));
        expect(actual.loading).toBe(false);
        expect(actual.schools).toEqual([school]);
        expect(actual.error).toBe(null);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to create school';
        const actual = schoolReducer(initialState, createSchool.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toBe(error);
      });
    });

    describe('updateSchool', () => {
      const existingState = {
        ...initialState,
        schools: [{ id: 1, name: 'School 1' }],
        selectedSchool: { id: 1, name: 'School 1' },
      };

      it('should set loading true when action is pending', () => {
        const actual = schoolReducer(existingState, updateSchool.pending());
        expect(actual.loading).toBe(true);
        expect(actual.error).toBe(null);
      });

      it('should update school when action is fulfilled', () => {
        const updatedSchool = { id: 1, name: 'Updated School 1' };
        const actual = schoolReducer(existingState, updateSchool.fulfilled(updatedSchool));
        expect(actual.loading).toBe(false);
        expect(actual.schools[0]).toEqual(updatedSchool);
        expect(actual.selectedSchool).toEqual(updatedSchool);
        expect(actual.error).toBe(null);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to update school';
        const actual = schoolReducer(existingState, updateSchool.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toBe(error);
      });
    });

    describe('deleteSchool', () => {
      const existingState = {
        ...initialState,
        schools: [{ id: 1, name: 'School 1' }],
        selectedSchool: { id: 1, name: 'School 1' },
      };

      it('should set loading true when action is pending', () => {
        const actual = schoolReducer(existingState, deleteSchool.pending());
        expect(actual.loading).toBe(true);
        expect(actual.error).toBe(null);
      });

      it('should remove school when action is fulfilled', () => {
        const actual = schoolReducer(existingState, deleteSchool.fulfilled(1));
        expect(actual.loading).toBe(false);
        expect(actual.schools).toEqual([]);
        expect(actual.selectedSchool).toBe(null);
        expect(actual.error).toBe(null);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to delete school';
        const actual = schoolReducer(existingState, deleteSchool.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toBe(error);
      });
    });
  });
});
