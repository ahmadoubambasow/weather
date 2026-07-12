import { Injectable } from '@angular/core';

import { LocationApi } from '../models/api/location-api.model';
import { WeatherLocation } from '../models/ui/weather-location.model';

/**
 * ============================================================
 * LocationMapper
 * ============================================================
 *
 * Transforme les données de l'API Open-Meteo
 * en modèle utilisé par l'interface.
 */

@Injectable({
  providedIn: 'root'
})
export class LocationMapper {

  /**
   * API → UI
   */
  toUiModel(api: LocationApi): WeatherLocation {

    return {

      name: api.name,

      country: api.country,

      region: api.admin1 ?? '',

      latitude: api.latitude,

      longitude: api.longitude

    };

  }

  /**
   * API[] → UI[]
   */
  toUiModels(api: LocationApi[]): WeatherLocation[] {

    return api.map(location => this.toUiModel(location));

  }

}