/**
 * Ville retournée
 * par le géocodage inverse.
 */
export interface ReverseGeocodingResponse {

  results: ReverseLocation[];

}

export interface ReverseLocation {

  id: number;

  name: string;

  country: string;

  latitude: number;

  longitude: number;

}