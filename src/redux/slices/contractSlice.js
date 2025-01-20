import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contracts: [],
  currentContract: null,
  loading: false,
  error: null,
};

const contractSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    setContracts: (state, action) => {
      state.contracts = action.payload;
      state.loading = false;
      state.error = null;
    },
    addContract: (state, action) => {
      state.contracts.push(action.payload);
    },
    updateContract: (state, action) => {
      const index = state.contracts.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.contracts[index] = action.payload;
      }
    },
    deleteContract: (state, action) => {
      state.contracts = state.contracts.filter(c => c.id !== action.payload);
    },
    setCurrentContract: (state, action) => {
      state.currentContract = action.payload;
    },
    updateObjective: (state, action) => {
      const { contractId, objectiveId, completed } = action.payload;
      const contract = state.contracts.find(c => c.id === contractId);
      if (contract) {
        const objective = contract.objectives.find(o => o.id === objectiveId);
        if (objective) {
          objective.completed = completed;
        }
      }
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
  setContracts,
  addContract,
  updateContract,
  deleteContract,
  setCurrentContract,
  updateObjective,
  setLoading,
  setError,
  clearError,
} = contractSlice.actions;

export default contractSlice.reducer;
