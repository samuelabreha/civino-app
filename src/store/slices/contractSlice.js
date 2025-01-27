import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { contractApi } from '../../services/api/contract';

const initialState = {
  contracts: [],
  selectedContract: null,
  loading: false,
  error: null
};

export const fetchContracts = createAsyncThunk(
  'contract/fetchContracts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await contractApi.getContracts();
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to fetch contracts');
    }
  }
);

export const fetchContractById = createAsyncThunk(
  'contract/fetchContractById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await contractApi.getContractById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to fetch contract');
    }
  }
);

export const createContract = createAsyncThunk(
  'contract/createContract',
  async (contractData, { rejectWithValue }) => {
    try {
      const response = await contractApi.createContract(contractData);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to create contract');
    }
  }
);

export const updateContract = createAsyncThunk(
  'contract/updateContract',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await contractApi.updateContract(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to update contract');
    }
  }
);

export const deleteContract = createAsyncThunk(
  'contract/deleteContract',
  async (id, { rejectWithValue }) => {
    try {
      await contractApi.deleteContract(id);
      return id;
    } catch (error) {
      return rejectWithValue('Failed to delete contract');
    }
  }
);

const contractSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    setSelectedContract: (state, action) => {
      state.selectedContract = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch contracts
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
      // Fetch contract by id
      .addCase(fetchContractById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContractById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedContract = action.payload;
      })
      .addCase(fetchContractById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create contract
      .addCase(createContract.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createContract.fulfilled, (state, action) => {
        state.loading = false;
        state.contracts.push(action.payload);
      })
      .addCase(createContract.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || 'Failed to create contract';
      })
      // Update contract
      .addCase(updateContract.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateContract.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.contracts.findIndex(contract => contract.id === action.payload.id);
        if (index !== -1) {
          state.contracts[index] = action.payload;
        }
        if (state.selectedContract?.id === action.payload.id) {
          state.selectedContract = action.payload;
        }
      })
      .addCase(updateContract.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || 'Failed to update contract';
      })
      // Delete contract
      .addCase(deleteContract.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContract.fulfilled, (state, action) => {
        state.loading = false;
        state.contracts = state.contracts.filter(contract => contract.id !== action.payload);
        if (state.selectedContract?.id === action.payload) {
          state.selectedContract = null;
        }
      })
      .addCase(deleteContract.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || 'Failed to delete contract';
      });
  }
});

export const { setSelectedContract, clearError } = contractSlice.actions;
export default contractSlice.reducer;
