import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentProfile: null,
  profiles: [],
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setCurrentProfile: (state, action) => {
      state.currentProfile = action.payload;
    },
    addProfile: (state, action) => {
      state.profiles.push(action.payload);
    },
    updateProfile: (state, action) => {
      const index = state.profiles.findIndex(
        (profile) => profile.id === action.payload.id
      );
      if (index !== -1) {
        state.profiles[index] = action.payload;
      }
    },
    deleteProfile: (state, action) => {
      state.profiles = state.profiles.filter(
        (profile) => profile.id !== action.payload
      );
    },
    setProfiles: (state, action) => {
      state.profiles = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setCurrentProfile,
  addProfile,
  updateProfile,
  deleteProfile,
  setProfiles,
  setLoading,
  setError,
} = profileSlice.actions;

export default profileSlice.reducer;
