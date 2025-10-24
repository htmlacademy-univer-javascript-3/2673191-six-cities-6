import { LocationModel } from './location-model';

export type PlaceCardShortModel = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: {
    name: string;
    location: LocationModel;
  };
  location: LocationModel;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};
