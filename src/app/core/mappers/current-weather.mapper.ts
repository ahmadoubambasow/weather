import { Injectable, inject } from '@angular/core';

import { CurrentWeatherApi } from '../models/api/current-weather-api.model';

import { Weather } from '../models/ui/weather.model';
import { WeatherCodeService } from '../services/weather-code';


/**
 * ============================================================
 * CurrentWeatherMapper
 * ============================================================
 *
 * Transforme les données de l'API
 * en modèle utilisé par l'interface.
 */

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherMapper {

  /**
   * Service de correspondance
   * des codes météo.
   */
  private readonly weatherCodeService = inject(WeatherCodeService);

  /**
   * Conversion API → UI.
   */
  toUiModel(
    api: CurrentWeatherApi,
    location: string
  ): Weather {

    const weatherInfo =
      this.weatherCodeService.get(api.weather_code);

    return {

      location,

      temperature: api.temperature_2m,

      feelsLike: api.apparent_temperature,

      humidity: api.relative_humidity_2m,

      pressure: api.surface_pressure,

      windSpeed: api.wind_speed_10m,

      uvIndex: api.uv_index,

      weatherCode: api.weather_code,

      latitude: api.latitude,

      longitude: api.longitude,

      country: api.country,

      region: api.region,

      description: weatherInfo.description,

      icon: weatherInfo.icon,

      background: weatherInfo.background,

      animation: weatherInfo.animation

    };

  }

}