import { Injectable } from '@angular/core';

import { HourlyWeatherApi } from '../models/api/hourly-weather-api.model';
import { HourlyForecast } from '../models/ui/hourly-forecast.model';
import { AppSettings } from '../models/ui/settings.model';

/**
 * ============================================================
 * HourlyWeatherMapper
 * ============================================================
 */

@Injectable({
  providedIn: 'root'
})
export class HourlyWeatherMapper {

  /**
   * API -> UI
   */
  toUiModel(
    api: HourlyWeatherApi,
    settings: AppSettings
  ): HourlyForecast[] {

    return api.time.map((time, index) => ({

      /**
       * Heure
       */
      time: new Date(time).toLocaleTimeString(
        'fr-FR',
        {
          hour: '2-digit',
          minute: '2-digit'
        }
      ),

      /**
       * Température
       */
      temperature: this.convertTemperature(
        api.temperature_2m[index],
        settings.temperatureUnit
      ),

      /**
       * Code météo
       */
      weatherCode: api.weather_code[index]

    }));

  }

  /**
   * Conversion °C -> °F
   */
  private convertTemperature(
    value: number,
    unit: 'celsius' | 'fahrenheit'
  ): number {

    if (unit === 'fahrenheit') {
      return Math.round((value * 9) / 5 + 32);
    }

    return Math.round(value);

  }

}