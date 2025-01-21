import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  snackbar: {
    open: false,
    message: '',
    severity: 'info', // 'success' | 'info' | 'warning' | 'error'
  },
  modal: {
    open: false,
    type: null,
    data: null,
  },
  loading: {
    global: false,
    requests: {},
  },
  theme: {
    mode: 'light',
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showSnackbar: (state, action) => {
      state.snackbar = {
        open: true,
        message: action.payload.message,
        severity: action.payload.severity || 'info',
      };
    },
    hideSnackbar: (state) => {
      state.snackbar.open = false;
    },
    showModal: (state, action) => {
      state.modal = {
        open: true,
        type: action.payload.type,
        data: action.payload.data,
      };
    },
    hideModal: (state) => {
      state.modal.open = false;
    },
    setGlobalLoading: (state, action) => {
      state.loading.global = action.payload;
    },
    setRequestLoading: (state, action) => {
      state.loading.requests[action.payload.key] = action.payload.value;
    },
    toggleTheme: (state) => {
      state.theme.mode = state.theme.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const {
  showSnackbar,
  hideSnackbar,
  showModal,
  hideModal,
  setGlobalLoading,
  setRequestLoading,
  toggleTheme,
} = uiSlice.actions;

export default uiSlice.reducer;
