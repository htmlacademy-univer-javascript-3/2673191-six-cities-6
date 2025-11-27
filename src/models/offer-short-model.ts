import { CityModel } from './city';
import { LocationModel } from './location-model';

export type OfferShortModel = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: CityModel;
  location: LocationModel;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};
