import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import questionnaireReducer from './slices/questionnaireSlice';
import contractReducer from './slices/contractSlice';
import notificationReducer from './slices/notificationSlice';
import calendarReducer from './slices/calendarSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    questionnaire: questionnaireReducer,
    contract: contractReducer,
    notification: notificationReducer,
    calendar: calendarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
