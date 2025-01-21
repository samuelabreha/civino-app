import schoolReducer, {
  fetchSchools,
  fetchSchoolById,
  createSchool,
  updateSchool,
  deleteSchool,
  addTeacher,
  removeTeacher,
  addStudent,
  removeStudent,
  clearError,
} from '../schoolSlice';

describe('schoolSlice', () => {
  const initialState = {
    schools: [],
    currentSchool: null,
    loading: false,
    error: null,
  };

  it('should handle initial state', () => {
    expect(schoolReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('reducers', () => {
    it('should handle clearError', () => {
      const actual = schoolReducer(
        { ...initialState, error: 'test error' },
        clearError()
      );
      expect(actual.error).toBeNull();
    });
  });

  describe('extra reducers', () => {
    describe('fetchSchools', () => {
      it('should set loading true while action is pending', () => {
        const actual = schoolReducer(initialState, fetchSchools.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update schools when action is fulfilled', () => {
        const schools = [
          { id: 1, name: 'School 1' },
          { id: 2, name: 'School 2' },
        ];
        const actual = schoolReducer(initialState, fetchSchools.fulfilled(schools));
        expect(actual.loading).toBe(false);
        expect(actual.schools).toEqual(schools);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch schools';
        const actual = schoolReducer(initialState, fetchSchools.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('fetchSchoolById', () => {
      it('should set loading true while action is pending', () => {
        const actual = schoolReducer(initialState, fetchSchoolById.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update currentSchool when action is fulfilled', () => {
        const school = { id: 1, name: 'School 1' };
        const actual = schoolReducer(initialState, fetchSchoolById.fulfilled(school));
        expect(actual.loading).toBe(false);
        expect(actual.currentSchool).toEqual(school);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch school';
        const actual = schoolReducer(initialState, fetchSchoolById.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('createSchool', () => {
      it('should set loading true while action is pending', () => {
        const actual = schoolReducer(initialState, createSchool.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should add school to schools array when action is fulfilled', () => {
        const newSchool = { id: 1, name: 'New School' };
        const actual = schoolReducer(initialState, createSchool.fulfilled(newSchool));
        expect(actual.loading).toBe(false);
        expect(actual.schools).toContainEqual(newSchool);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to create school';
        const actual = schoolReducer(initialState, createSchool.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('updateSchool', () => {
      const existingState = {
        ...initialState,
        schools: [
          { id: 1, name: 'School 1' },
          { id: 2, name: 'School 2' },
        ],
      };

      it('should set loading true while action is pending', () => {
        const actual = schoolReducer(existingState, updateSchool.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update school in schools array when action is fulfilled', () => {
        const updatedSchool = { id: 1, name: 'Updated School' };
        const actual = schoolReducer(existingState, updateSchool.fulfilled(updatedSchool));
        expect(actual.loading).toBe(false);
        expect(actual.schools).toContainEqual(updatedSchool);
        expect(actual.schools.find(school => school.id === 1)).toEqual(updatedSchool);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to update school';
        const actual = schoolReducer(existingState, updateSchool.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('deleteSchool', () => {
      const existingState = {
        ...initialState,
        schools: [
          { id: 1, name: 'School 1' },
          { id: 2, name: 'School 2' },
        ],
      };

      it('should set loading true while action is pending', () => {
        const actual = schoolReducer(existingState, deleteSchool.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should remove school from schools array when action is fulfilled', () => {
        const actual = schoolReducer(existingState, deleteSchool.fulfilled(1));
        expect(actual.loading).toBe(false);
        expect(actual.schools).not.toContainEqual({ id: 1, name: 'School 1' });
        expect(actual.schools).toHaveLength(1);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to delete school';
        const actual = schoolReducer(existingState, deleteSchool.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('addTeacher', () => {
      const existingState = {
        ...initialState,
        currentSchool: {
          id: 1,
          name: 'School 1',
          teachers: [],
        },
      };

      it('should update school teachers when action is fulfilled', () => {
        const updatedSchool = {
          id: 1,
          name: 'School 1',
          teachers: [{ id: 1, name: 'Teacher 1' }],
        };
        const actual = schoolReducer(existingState, addTeacher.fulfilled(updatedSchool));
        expect(actual.loading).toBe(false);
        expect(actual.currentSchool).toEqual(updatedSchool);
      });
    });

    describe('removeTeacher', () => {
      const existingState = {
        ...initialState,
        currentSchool: {
          id: 1,
          name: 'School 1',
          teachers: [{ id: 1, name: 'Teacher 1' }],
        },
      };

      it('should update school teachers when action is fulfilled', () => {
        const updatedSchool = {
          id: 1,
          name: 'School 1',
          teachers: [],
        };
        const actual = schoolReducer(existingState, removeTeacher.fulfilled(updatedSchool));
        expect(actual.loading).toBe(false);
        expect(actual.currentSchool).toEqual(updatedSchool);
      });
    });

    describe('addStudent', () => {
      const existingState = {
        ...initialState,
        currentSchool: {
          id: 1,
          name: 'School 1',
          students: [],
        },
      };

      it('should update school students when action is fulfilled', () => {
        const updatedSchool = {
          id: 1,
          name: 'School 1',
          students: [{ id: 1, name: 'Student 1' }],
        };
        const actual = schoolReducer(existingState, addStudent.fulfilled(updatedSchool));
        expect(actual.loading).toBe(false);
        expect(actual.currentSchool).toEqual(updatedSchool);
      });
    });

    describe('removeStudent', () => {
      const existingState = {
        ...initialState,
        currentSchool: {
          id: 1,
          name: 'School 1',
          students: [{ id: 1, name: 'Student 1' }],
        },
      };

      it('should update school students when action is fulfilled', () => {
        const updatedSchool = {
          id: 1,
          name: 'School 1',
          students: [],
        };
        const actual = schoolReducer(existingState, removeStudent.fulfilled(updatedSchool));
        expect(actual.loading).toBe(false);
        expect(actual.currentSchool).toEqual(updatedSchool);
      });
    });
  });
});
