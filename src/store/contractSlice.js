import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunks for contract actions
export const fetchContracts = createAsyncThunk('contracts/fetchContracts', async () => {
    // Simulate fetching contracts from an API
    return [{ id: 1, title: 'Contract 1' }, { id: 2, title: 'Contract 2' }];
});

export const createContract = createAsyncThunk('contracts/createContract', async (contract) => {
    // Simulate creating a contract
    return contract;
});

export const updateContract = createAsyncThunk('contracts/updateContract', async (contract) => {
    // Simulate updating a contract
    return contract;
});

export const deleteContract = createAsyncThunk('contracts/deleteContract', async (contractId) => {
    // Simulate deleting a contract
    return contractId;
});

const contractSlice = createSlice({
    name: 'contracts',
    initialState: {
        contracts: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearError(state) {
            state.error = null;
        },
        addContract(state, action) {
            state.contracts.push(action.payload);
        },
        updateContractState(state, action) {
            const index = state.contracts.findIndex(contract => contract.id === action.payload.id);
            if (index !== -1) {
                state.contracts[index] = action.payload;
            }
        },
        removeContract(state, action) {
            state.contracts = state.contracts.filter(contract => contract.id !== action.payload);
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
                state.error = action.error.message;
            })
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
                state.error = action.error.message;
            })
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
            })
            .addCase(updateContract.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteContract.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteContract.fulfilled, (state, action) => {
                state.loading = false;
                state.contracts = state.contracts.filter(contract => contract.id !== action.payload);
            })
            .addCase(deleteContract.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearError, addContract, updateContractState, removeContract } = contractSlice.actions;
export default contractSlice.reducer;
