import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { contractAPI } from '../../services/api/contract';

export const fetchContracts = createAsyncThunk(
  'contract/fetchContracts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await contractAPI.getAll();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createContract = createAsyncThunk(
  'contract/createContract',
  async (contractData, { rejectWithValue }) => {
    try {
      const response = await contractAPI.create(contractData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateContract = createAsyncThunk(
  'contract/updateContract',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await contractAPI.update(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signContract = createAsyncThunk(
  'contract/signContract',
  async ({ id, signature }, { rejectWithValue }) => {
    try {
      const response = await contractAPI.sign(id, signature);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  contracts: [],
  loading: false,
  error: null,
  selectedContract: null,
};

const contractSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setSelectedContract: (state, action) => {
      state.selectedContract = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContracts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContracts.fulfilled, (state, action) => {
        state.loading = false;
        state.contracts = action.payload;
      })
      .addCase(fetchContracts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createContract.fulfilled, (state, action) => {
        state.contracts.push(action.payload);
      })
      .addCase(updateContract.fulfilled, (state, action) => {
        const index = state.contracts.findIndex((contract) => contract.id === action.payload.id);
        if (index !== -1) {
          state.contracts[index] = action.payload;
        }
      })
      .addCase(signContract.fulfilled, (state, action) => {
        const index = state.contracts.findIndex((contract) => contract.id === action.payload.id);
        if (index !== -1) {
          state.contracts[index] = action.payload;
        }
      });
  },
});

export const { clearError, setSelectedContract } = contractSlice.actions;
export default contractSlice.reducer;
