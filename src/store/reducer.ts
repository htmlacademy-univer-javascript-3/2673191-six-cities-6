import { combineReducers } from '@reduxjs/toolkit';
import { Namespace } from './namespace';
import { authSlice } from './namespaces/auth';
import { offersSlice } from './namespaces/offers';

export const rootReducer = combineReducers({
  [Namespace.Auth]: authSlice.reducer,
  [Namespace.Offers]: offersSlice.reducer
})
