import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questionnaires: [],
  currentQuestionnaire: null,
  responses: [],
  loading: false,
  error: null,
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    setQuestionnaires: (state, action) => {
      state.questionnaires = action.payload;
      state.loading = false;
      state.error = null;
    },
    setCurrentQuestionnaire: (state, action) => {
      state.currentQuestionnaire = action.payload;
    },
    addResponse: (state, action) => {
      state.responses.push(action.payload);
    },
    updateResponse: (state, action) => {
      const index = state.responses.findIndex(r => r.id === action.payload.id);
      if (index !== -1) {
        state.responses[index] = action.payload;
      }
    },
    clearResponses: (state) => {
      state.responses = [];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setQuestionnaires,
  setCurrentQuestionnaire,
  addResponse,
  updateResponse,
  clearResponses,
  setLoading,
  setError,
  clearError,
} = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
