import teacherReducer, {
  fetchTeachers,
  fetchTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
  updateSchedule,
  updateAvailability,
  clearError,
} from '../teacherSlice';

describe('teacherSlice', () => {
  const initialState = {
    teachers: [],
    currentTeacher: null,
    loading: false,
    error: null,
  };

  it('should handle initial state', () => {
    expect(teacherReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('reducers', () => {
    it('should handle clearError', () => {
      const actual = teacherReducer(
        { ...initialState, error: 'test error' },
        clearError()
      );
      expect(actual.error).toBeNull();
    });
  });

  describe('extra reducers', () => {
    describe('fetchTeachers', () => {
      it('should set loading true while action is pending', () => {
        const actual = teacherReducer(initialState, fetchTeachers.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update teachers when action is fulfilled', () => {
        const teachers = [
          { id: 1, name: 'Teacher 1' },
          { id: 2, name: 'Teacher 2' },
        ];
        const actual = teacherReducer(initialState, fetchTeachers.fulfilled(teachers));
        expect(actual.loading).toBe(false);
        expect(actual.teachers).toEqual(teachers);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch teachers';
        const actual = teacherReducer(initialState, fetchTeachers.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('fetchTeacherById', () => {
      it('should set loading true while action is pending', () => {
        const actual = teacherReducer(initialState, fetchTeacherById.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update currentTeacher when action is fulfilled', () => {
        const teacher = { id: 1, name: 'Teacher 1' };
        const actual = teacherReducer(initialState, fetchTeacherById.fulfilled(teacher));
        expect(actual.loading).toBe(false);
        expect(actual.currentTeacher).toEqual(teacher);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch teacher';
        const actual = teacherReducer(initialState, fetchTeacherById.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('createTeacher', () => {
      it('should set loading true while action is pending', () => {
        const actual = teacherReducer(initialState, createTeacher.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should add teacher to teachers array when action is fulfilled', () => {
        const newTeacher = { id: 1, name: 'New Teacher' };
        const actual = teacherReducer(initialState, createTeacher.fulfilled(newTeacher));
        expect(actual.loading).toBe(false);
        expect(actual.teachers).toContainEqual(newTeacher);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to create teacher';
        const actual = teacherReducer(initialState, createTeacher.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('updateTeacher', () => {
      const existingState = {
        ...initialState,
        teachers: [
          { id: 1, name: 'Teacher 1' },
          { id: 2, name: 'Teacher 2' },
        ],
      };

      it('should set loading true while action is pending', () => {
        const actual = teacherReducer(existingState, updateTeacher.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update teacher in teachers array when action is fulfilled', () => {
        const updatedTeacher = { id: 1, name: 'Updated Teacher' };
        const actual = teacherReducer(existingState, updateTeacher.fulfilled(updatedTeacher));
        expect(actual.loading).toBe(false);
        expect(actual.teachers).toContainEqual(updatedTeacher);
        expect(actual.teachers.find(teacher => teacher.id === 1)).toEqual(updatedTeacher);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to update teacher';
        const actual = teacherReducer(existingState, updateTeacher.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('deleteTeacher', () => {
      const existingState = {
        ...initialState,
        teachers: [
          { id: 1, name: 'Teacher 1' },
          { id: 2, name: 'Teacher 2' },
        ],
      };

      it('should set loading true while action is pending', () => {
        const actual = teacherReducer(existingState, deleteTeacher.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should remove teacher from teachers array when action is fulfilled', () => {
        const actual = teacherReducer(existingState, deleteTeacher.fulfilled(1));
        expect(actual.loading).toBe(false);
        expect(actual.teachers).not.toContainEqual({ id: 1, name: 'Teacher 1' });
        expect(actual.teachers).toHaveLength(1);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to delete teacher';
        const actual = teacherReducer(existingState, deleteTeacher.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('updateSchedule', () => {
      const existingState = {
        ...initialState,
        currentTeacher: {
          id: 1,
          name: 'Teacher 1',
          schedule: [],
        },
      };

      it('should update teacher schedule when action is fulfilled', () => {
        const updatedTeacher = {
          id: 1,
          name: 'Teacher 1',
          schedule: [
            { day: 'Monday', slots: ['9:00', '10:00'] },
          ],
        };
        const actual = teacherReducer(existingState, updateSchedule.fulfilled(updatedTeacher));
        expect(actual.loading).toBe(false);
        expect(actual.currentTeacher).toEqual(updatedTeacher);
      });
    });

    describe('updateAvailability', () => {
      const existingState = {
        ...initialState,
        currentTeacher: {
          id: 1,
          name: 'Teacher 1',
          availability: [],
        },
      };

      it('should update teacher availability when action is fulfilled', () => {
        const updatedTeacher = {
          id: 1,
          name: 'Teacher 1',
          availability: [
            { date: '2025-01-21', available: true },
          ],
        };
        const actual = teacherReducer(existingState, updateAvailability.fulfilled(updatedTeacher));
        expect(actual.loading).toBe(false);
        expect(actual.currentTeacher).toEqual(updatedTeacher);
      });
    });
  });
});
