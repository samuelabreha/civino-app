import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questionnaires: [],
  currentQuestionnaire: null,
  responses: {},
  loading: false,
  error: null,
};

const questionnairesSlice = createSlice({
  name: 'questionnaires',
  initialState,
  reducers: {
    setQuestionnaires: (state, action) => {
      state.questionnaires = action.payload;
    },
    setCurrentQuestionnaire: (state, action) => {
      state.currentQuestionnaire = action.payload;
    },
    saveResponse: (state, action) => {
      const { questionnaireId, responses } = action.payload;
      state.responses[questionnaireId] = {
        ...state.responses[questionnaireId],
        ...responses,
      };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setQuestionnaires,
  setCurrentQuestionnaire,
  saveResponse,
  setLoading,
  setError,
} = questionnairesSlice.actions;

export default questionnairesSlice.reducer;
