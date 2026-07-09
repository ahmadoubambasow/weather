import { Injectable, inject } from '@angular/core';
import { HourlyWeatherApi } from '../models/api/hourly-weather-api.model';
import { HourlyForecast } from '../models/ui/hourly-forecast.model';
import { WeatherCodeService } from '../services/weather-code';

/**
 * ============================================================
 * HourlyWeatherMapper
 * ============================================================
 *
 * Transforme les données brutes de l'API Open-Meteo
 * en données prêtes à être affichées dans l'interface.
 */

@Injectable({
  providedIn: 'root'
})

export class HourlyWeatherMapper {

  private readonly weatherCodeService =
    inject(WeatherCodeService);

  toUiModel(
    api: HourlyWeatherApi
  ): HourlyForecast[] {

    return api.time.map((time, index) => {

      const weather =
        this.weatherCodeService.get(
          api.weather_code[index]
        );

      return {

        time: time.substring(11, 16),

        temperature: api.temperature_2m[index],

        weatherCode: api.weather_code[index],

      };

    });

  }

}