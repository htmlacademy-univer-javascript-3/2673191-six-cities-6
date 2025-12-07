import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../models/authorization-status';
import { UserModel } from '../models/user-model';
import { CityModel } from '../models/city';
import { OfferShortModel } from '../models/offer-short-model';

export const setAuthStatus = createAction<AuthorizationStatus>('set_auth_status');
export const setCurrentUser = createAction<UserModel>('set_current_user');
export const selectCity = createAction<CityModel>('select_city');
export const setOffers = createAction<OfferShortModel[]>('set_offers');
