import contractReducer, {
  fetchContracts,
  fetchContractById,
  createContract,
  updateContract,
  deleteContract,
  signContract,
  clearError,
} from '../contractSlice';

describe('contractSlice', () => {
  const initialState = {
    contracts: [],
    currentContract: null,
    loading: false,
    error: null,
  };

  it('should handle initial state', () => {
    expect(contractReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('reducers', () => {
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
        const actual = contractReducer(initialState, fetchContracts.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update contracts when action is fulfilled', () => {
        const contracts = [
          { id: 1, title: 'Contract 1' },
          { id: 2, title: 'Contract 2' },
        ];
        const actual = contractReducer(initialState, fetchContracts.fulfilled(contracts));
        expect(actual.loading).toBe(false);
        expect(actual.contracts).toEqual(contracts);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch contracts';
        const actual = contractReducer(initialState, fetchContracts.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('fetchContractById', () => {
      it('should set loading true while action is pending', () => {
        const actual = contractReducer(initialState, fetchContractById.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update currentContract when action is fulfilled', () => {
        const contract = { id: 1, title: 'Contract 1' };
        const actual = contractReducer(initialState, fetchContractById.fulfilled(contract));
        expect(actual.loading).toBe(false);
        expect(actual.currentContract).toEqual(contract);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to fetch contract';
        const actual = contractReducer(initialState, fetchContractById.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('createContract', () => {
      it('should set loading true while action is pending', () => {
        const actual = contractReducer(initialState, createContract.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should add contract to contracts array when action is fulfilled', () => {
        const newContract = { id: 1, title: 'New Contract' };
        const actual = contractReducer(initialState, createContract.fulfilled(newContract));
        expect(actual.loading).toBe(false);
        expect(actual.contracts).toContainEqual(newContract);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to create contract';
        const actual = contractReducer(initialState, createContract.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
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
        const actual = contractReducer(existingState, updateContract.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should update contract in contracts array when action is fulfilled', () => {
        const updatedContract = { id: 1, title: 'Updated Contract' };
        const actual = contractReducer(existingState, updateContract.fulfilled(updatedContract));
        expect(actual.loading).toBe(false);
        expect(actual.contracts).toContainEqual(updatedContract);
        expect(actual.contracts.find(contract => contract.id === 1)).toEqual(updatedContract);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to update contract';
        const actual = contractReducer(existingState, updateContract.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
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
        const actual = contractReducer(existingState, deleteContract.pending);
        expect(actual.loading).toBe(true);
        expect(actual.error).toBeNull();
      });

      it('should remove contract from contracts array when action is fulfilled', () => {
        const actual = contractReducer(existingState, deleteContract.fulfilled(1));
        expect(actual.loading).toBe(false);
        expect(actual.contracts).not.toContainEqual({ id: 1, title: 'Contract 1' });
        expect(actual.contracts).toHaveLength(1);
      });

      it('should set error when action is rejected', () => {
        const error = 'Failed to delete contract';
        const actual = contractReducer(existingState, deleteContract.rejected(null, '', error));
        expect(actual.loading).toBe(false);
        expect(actual.error).toEqual(error);
      });
    });

    describe('signContract', () => {
      const existingState = {
        ...initialState,
        currentContract: { id: 1, title: 'Contract 1', signatures: [] },
      };

      it('should update contract signatures when action is fulfilled', () => {
        const updatedContract = {
          id: 1,
          title: 'Contract 1',
          signatures: [{ userId: 1, date: new Date().toISOString() }],
        };
        const actual = contractReducer(existingState, signContract.fulfilled(updatedContract));
        expect(actual.loading).toBe(false);
        expect(actual.currentContract).toEqual(updatedContract);
      });
    });
  });
});
