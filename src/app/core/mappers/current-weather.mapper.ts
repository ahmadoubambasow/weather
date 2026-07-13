import { Injectable, inject } from '@angular/core';

import { CurrentWeatherApi } from '../models/api/current-weather-api.model';

import { Weather } from '../models/ui/weather.model';
import { WeatherCodeService } from '../services/weather-code';
import { AppSettings } from '../models/ui/settings.model';


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
    location: string,
    settings: AppSettings
  ): Weather {


    const weatherInfo =
      this.weatherCodeService.get(api.weather_code);

    return {

      location,

      temperature: this.convertTemperature(
        api.temperature_2m,
        settings.temperatureUnit
      ),

      feelsLike: this.convertTemperature(
        api.apparent_temperature,
        settings.temperatureUnit
      ),

      humidity: api.relative_humidity_2m,

      pressure: api.surface_pressure,

      windSpeed: this.convertWind(
        api.wind_speed_10m,
        settings.windUnit
      ),

      windUnit: settings.windUnit, 

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


  private convertTemperature(
  value:number,
  unit:'celsius'|'fahrenheit'
  ):number {


  if(unit==='fahrenheit'){

  return Number(
  (value * 9 / 5 + 32)
  .toFixed(1)
  );

  }


  return Number(
  value.toFixed(1)
  );


  }


  private convertWind(
    speed:number,
    unit:'kmh'|'mph'
  ):number {


    if(unit === 'mph') {

      const result = Number(
        (speed * 0.621371).toFixed(1)
      );




      return result;

    }


    return Number(
      speed.toFixed(1)
    );

  }

}