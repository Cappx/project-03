/* eslint-disable no-console */
import { useState, useEffect, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import { Location } from '../types/offers';

export default function useMap(mapRef: MutableRefObject<HTMLElement | null>, currentCityLocation: Location ): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: currentCityLocation.latitude,
          lng: currentCityLocation.longitude,
        },
        zoom: currentCityLocation.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instance.addLayer(layer);
      setMap(instance);
    }

    return () => {
      mapRef.current = null;
    };

  }, [mapRef, map, currentCityLocation]);

  return map;
}
