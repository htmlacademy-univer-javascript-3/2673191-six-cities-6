import { AxiosInstance } from 'axios';
import handleRequest from '../tools/handle-request';
import { AppDispatch } from '.';
import { State } from './reducer';
import { setAuthStatus, setCurrentUser, setOffers } from './action';
import { AuthorizationStatus } from '../models/authorization-status';
import { UserModel } from '../models/user-model';
import { OfferShortModel } from '../models/offer-short-model';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RegistrationRequest } from '../models/registration-request';
import { dropToken, saveToken } from '../services/token';

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
      saveToken(data.token);
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
    },
    {
      [401]: () => dispatch(setAuthStatus(AuthorizationStatus.NoAuth))
    },
    () => dispatch(setAuthStatus(AuthorizationStatus.Unknown))
  ));

export const fetchRegistration = createAsyncThunk<void, RegistrationRequest, AsyncThunkConfig>(
  'fetch_registration', (arg, { dispatch, extra: api }) => handleRequest(
    () => api.post<UserModel>('login', arg),
    (data) => {
      dispatch(setCurrentUser(data));
      saveToken(data.token);
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
    },
    {
      [400]: () => dispatch(setAuthStatus(AuthorizationStatus.NoAuth))
    },
    () => dispatch(setAuthStatus(AuthorizationStatus.Unknown))
  ));

export const fetchLogout = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  'fetch_logout', (_arg, { dispatch, extra: api }) => handleRequest(
    () => api.delete('logout'),
    () => {
      dispatch(setCurrentUser(null));
      dropToken();
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    },
    {},
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
