import { configureStore } from '@reduxjs/toolkit';
import contractReducer, {
  fetchContracts,
  fetchContractById,
  createContract,
  updateContract,
  deleteContract,
  setSelectedContract,
  signContract,
  clearError,
} from '../contractSlice';

const initialState = {
  contracts: [],
  selectedContract: null,
  loading: false,
  error: null,
};

const store = configureStore({
  reducer: {
    contract: contractReducer,
  },
});

describe('contractSlice', () => {
  it('should handle initial state', () => {
    expect(contractReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('reducers', () => {
    it('should handle setSelectedContract', () => {
      const contract = { id: 1, title: 'Contract 1' };
      const state = contractReducer(initialState, setSelectedContract(contract));
      expect(state.selectedContract).toEqual(contract);
    });

    it('should handle clearError', () => {
      const actual = contractReducer(
        { ...initialState, error: 'test error' },
        clearError()
      );
      expect(actual.error).toBeNull();
    });
  });

  describe('extra reducers', () => {
    describe('fetchContracts', () => {
      it('should set loading true while action is pending', () => {
        const action = { type: fetchContracts.pending.type };
        const state = contractReducer(initialState, action);
        expect(state.loading).toBe(true);
        expect(state.error).toBeNull();
      });

      it('should update contracts when action is fulfilled', () => {
        const contracts = [
          { id: 1, title: 'Contract 1' },
          { id: 2, title: 'Contract 2' },
        ];
        const action = { type: fetchContracts.fulfilled.type, payload: contracts };
        const state = contractReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.contracts).toEqual(contracts);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch contracts';
        const action = { type: fetchContracts.rejected.type, error: { message: error } };
        const state = contractReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toEqual(error);
      });
    });

    describe('fetchContractById', () => {
      it('should set loading true while action is pending', () => {
        const action = { type: fetchContractById.pending.type };
        const state = contractReducer(initialState, action);
        expect(state.loading).toBe(true);
        expect(state.error).toBeNull();
      });

      it('should update selectedContract when action is fulfilled', () => {
        const contract = { id: 1, title: 'Contract 1' };
        const action = { type: fetchContractById.fulfilled.type, payload: contract };
        const state = contractReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.selectedContract).toEqual(contract);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch contract';
        const action = { type: fetchContractById.rejected.type, error: { message: error } };
        const state = contractReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toEqual(error);
      });
    });

    describe('createContract', () => {
      it('should set loading true while action is pending', () => {
        const action = { type: createContract.pending.type };
        const state = contractReducer(initialState, action);
        expect(state.loading).toBe(true);
        expect(state.error).toBeNull();
      });

      it('should add contract to contracts array when action is fulfilled', () => {
        const newContract = { id: 1, title: 'New Contract' };
        const action = { type: createContract.fulfilled.type, payload: newContract };
        const state = contractReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.contracts).toContainEqual(newContract);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to create contract';
        const action = { type: createContract.rejected.type, error: { message: error } };
        const state = contractReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toEqual(error);
      });
    });

    describe('updateContract', () => {
      const existingState = {
        ...initialState,
        contracts: [
          { id: 1, title: 'Contract 1' },
          { id: 2, title: 'Contract 2' },
        ],
      };

      it('should set loading true while action is pending', () => {
        const action = { type: updateContract.pending.type };
        const state = contractReducer(existingState, action);
        expect(state.loading).toBe(true);
        expect(state.error).toBeNull();
      });

      it('should update contract in contracts array when action is fulfilled', () => {
        const updatedContract = { id: 1, title: 'Updated Contract 1' };
        const action = { type: updateContract.fulfilled.type, payload: updatedContract };
        const state = contractReducer(existingState, action);
        expect(state.loading).toBe(false);
        expect(state.contracts).toContainEqual(updatedContract);
        expect(state.contracts.find((c) => c.id === 1)).toEqual(updatedContract);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to update contract';
        const action = { type: updateContract.rejected.type, error: { message: error } };
        const state = contractReducer(existingState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toEqual(error);
      });
    });

    describe('deleteContract', () => {
      const existingState = {
        ...initialState,
        contracts: [
          { id: 1, title: 'Contract 1' },
          { id: 2, title: 'Contract 2' },
        ],
      };

      it('should set loading true while action is pending', () => {
        const action = { type: deleteContract.pending.type };
        const state = contractReducer(existingState, action);
        expect(state.loading).toBe(true);
        expect(state.error).toBeNull();
      });

      it('should remove contract from contracts array when action is fulfilled', () => {
        const action = { type: deleteContract.fulfilled.type, payload: 1 };
        const state = contractReducer(existingState, action);
        expect(state.loading).toBe(false);
        expect(state.contracts).not.toContainEqual({ id: 1, title: 'Contract 1' });
        expect(state.contracts).toHaveLength(1);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to delete contract';
        const action = { type: deleteContract.rejected.type, error: { message: error } };
        const state = contractReducer(existingState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toEqual(error);
      });
    });

    describe('signContract', () => {
      const existingState = {
        ...initialState,
        selectedContract: { id: 1, title: 'Contract 1', signatures: [] },
      };

      it('should update contract signatures when action is fulfilled', () => {
        const updatedContract = {
          id: 1,
          title: 'Contract 1',
          signatures: [{ userId: 1, date: new Date().toISOString() }],
        };
        const action = { type: signContract.fulfilled.type, payload: updatedContract };
        const state = contractReducer(existingState, action);
        expect(state.loading).toBe(false);
        expect(state.selectedContract).toEqual(updatedContract);
      });
    });
  });
});
