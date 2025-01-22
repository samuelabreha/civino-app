import teacherReducer, {
  fetchTeachers,
  fetchTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
  setSelectedTeacher
} from '../teacherSlice';

const initialState = {
  teachers: [],
  selectedTeacher: null,
  teacherStats: null,
  loading: false,
  error: null
};

describe('teacherSlice', () => {
  it('should handle initial state', () => {
    expect(teacherReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('reducers', () => {
    it('should handle setSelectedTeacher', () => {
      const teacher = { id: 1, name: 'Teacher 1' };
      const state = teacherReducer(initialState, setSelectedTeacher(teacher));
      expect(state.selectedTeacher).toEqual(teacher);
    });
  });

  describe('extra reducers', () => {
    describe('fetchTeachers', () => {
      it('should set loading true while action is pending', () => {
        const action = { type: fetchTeachers.pending.type };
        const state = teacherReducer(initialState, action);
        expect(state.loading).toBe(true);
        expect(state.error).toBeNull();
      });

      it('should update teachers when action is fulfilled', () => {
        const teachers = [
          { id: 1, name: 'Teacher 1' },
          { id: 2, name: 'Teacher 2' }
        ];
        const action = { type: fetchTeachers.fulfilled.type, payload: teachers };
        const state = teacherReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.teachers).toEqual(teachers);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch teachers';
        const action = { type: fetchTeachers.rejected.type, payload: error };
        const state = teacherReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toEqual(error);
      });
    });

    describe('fetchTeacherById', () => {
      it('should set loading true while action is pending', () => {
        const action = { type: fetchTeacherById.pending.type };
        const state = teacherReducer(initialState, action);
        expect(state.loading).toBe(true);
        expect(state.error).toBeNull();
      });

      it('should update selectedTeacher when action is fulfilled', () => {
        const teacher = { id: 1, name: 'Teacher 1' };
        const action = { type: fetchTeacherById.fulfilled.type, payload: teacher };
        const state = teacherReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.selectedTeacher).toEqual(teacher);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch teacher';
        const action = { type: fetchTeacherById.rejected.type, payload: error };
        const state = teacherReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toEqual(error);
      });
    });

    describe('createTeacher', () => {
      it('should set loading true while action is pending', () => {
        const action = { type: createTeacher.pending.type };
        const state = teacherReducer(initialState, action);
        expect(state.loading).toBe(true);
        expect(state.error).toBeNull();
      });

      it('should add teacher to teachers array when action is fulfilled', () => {
        const newTeacher = { id: 1, name: 'New Teacher' };
        const action = { type: createTeacher.fulfilled.type, payload: newTeacher };
        const state = teacherReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.teachers).toContainEqual(newTeacher);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to create teacher';
        const action = { type: createTeacher.rejected.type, payload: error };
        const state = teacherReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toEqual(error);
      });
    });

    describe('updateTeacher', () => {
      const existingState = {
        ...initialState,
        teachers: [
          { id: 1, name: 'Teacher 1' },
          { id: 2, name: 'Teacher 2' }
        ]
      };

      it('should set loading true while action is pending', () => {
        const action = { type: updateTeacher.pending.type };
        const state = teacherReducer(existingState, action);
        expect(state.loading).toBe(true);
        expect(state.error).toBeNull();
      });

      it('should update teacher in teachers array when action is fulfilled', () => {
        const updatedTeacher = { id: 1, name: 'Updated Teacher 1' };
        const action = { type: updateTeacher.fulfilled.type, payload: updatedTeacher };
        const state = teacherReducer(existingState, action);
        expect(state.loading).toBe(false);
        expect(state.teachers).toContainEqual(updatedTeacher);
        expect(state.teachers.find(t => t.id === 1)).toEqual(updatedTeacher);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to update teacher';
        const action = { type: updateTeacher.rejected.type, payload: error };
        const state = teacherReducer(existingState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toEqual(error);
      });
    });

    describe('deleteTeacher', () => {
      const existingState = {
        ...initialState,
        teachers: [
          { id: 1, name: 'Teacher 1' },
          { id: 2, name: 'Teacher 2' }
        ]
      };

      it('should set loading true while action is pending', () => {
        const action = { type: deleteTeacher.pending.type };
        const state = teacherReducer(existingState, action);
        expect(state.loading).toBe(true);
        expect(state.error).toBeNull();
      });

      it('should remove teacher from teachers array when action is fulfilled', () => {
        const action = { type: deleteTeacher.fulfilled.type, payload: 1 };
        const state = teacherReducer(existingState, action);
        expect(state.loading).toBe(false);
        expect(state.teachers).not.toContainEqual({ id: 1, name: 'Teacher 1' });
        expect(state.teachers).toHaveLength(1);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to delete teacher';
        const action = { type: deleteTeacher.rejected.type, payload: error };
        const state = teacherReducer(existingState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toEqual(error);
      });
    });
  });
});
