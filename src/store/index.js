import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import childReducer from './slices/childSlice';
import communityReducer from './slices/communitySlice';
import contractReducer from './slices/contractSlice';
import schoolReducer from './slices/schoolSlice';
import teacherReducer from './slices/teacherSlice';
import referenceReducer from './slices/referenceSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    child: childReducer,
    community: communityReducer,
    contract: contractReducer,
    school: schoolReducer,
    teacher: teacherReducer,
    reference: referenceReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
