import { useEffect, useRef } from 'react';
import { LocationModel } from '../../models/location-model';
import useMap from './use-map';
import { Icon, layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type MapProps = {
  cityLocation: LocationModel;
  offerLocations: [string, LocationModel][];
  selectedOfferId: string;
};

export default function Map({ cityLocation, offerLocations, selectedOfferId }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (!map) {
      return;
    }
    const markerLayer = layerGroup().addTo(map);
    for (const [offerId, location] of offerLocations) {
      const marker = new Marker({
        lat: location.latitude,
        lng: location.longitude
      });
      marker
        .setIcon(
          selectedOfferId === offerId
            ? currentCustomIcon
            : defaultCustomIcon
        )
        .addTo(markerLayer);
    }

    return () => {
      map.removeLayer(markerLayer);
    };
  }, [map, offerLocations, selectedOfferId]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}
