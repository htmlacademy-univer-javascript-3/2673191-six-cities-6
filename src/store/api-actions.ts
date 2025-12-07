import { AxiosInstance } from 'axios';
import handleRequest from '../tools/handle-request';
import { AppDispatch } from '.';
import { State } from './reducer';
import { setAuthStatus, setCurrentUser, setOffers } from './action';
import { AuthorizationStatus } from '../models/authorization-status';
import { UserModel } from '../models/user-model';
import { OfferShortModel } from '../models/offer-short-model';
import { createAsyncThunk } from '@reduxjs/toolkit';

type AsyncThunkConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export const fetchLogin = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  'fetch_login', (_arg, { dispatch, extra: api }) => handleRequest(
    () => api.get<UserModel>('login'),
    (data) => {
      dispatch(setCurrentUser(data));
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
    },
    {
      [401]: () => dispatch(setAuthStatus(AuthorizationStatus.NoAuth))
    },
    () => dispatch(setAuthStatus(AuthorizationStatus.Unknown))
  ));

export const fetchOffers = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  'fetch_offers',
  async (_arg, { dispatch, extra: api }) => handleRequest(
    () => api.get<OfferShortModel[]>('offers'),
    (data) => dispatch(setOffers(data)),
    {},
    () => { }
  ));
