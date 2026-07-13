import { inject, Injectable } from '@angular/core';

import { WeatherCodeService } from '../services/weather-code';

import { DailyWeatherApi } from '../models/api/daily-weather-api.model';
import { DailyForecast } from '../models/ui/daily-forecast.model';
import { AppSettings } from '../models/ui/settings.model';

/**
 * ============================================================
 * DailyWeatherMapper
 * ============================================================
 */
@Injectable({
  providedIn: 'root'
})
export class DailyWeatherMarpper {

  private readonly weatherCodeService =
    inject(WeatherCodeService);

  /**
   * API -> UI
   */
  toUiModel(
    api: DailyWeatherApi,
    settings: AppSettings
  ): DailyForecast[] {

    return api.time.map((date, index) => {

      const weather =
        this.weatherCodeService.get(
          api.weather_code[index]
        );

      return {

        day: this.formatDay(date),

        minTemperature: this.convertTemperature(
          api.temperature_2m_min[index],
          settings.temperatureUnit
        ),

        maxTemperature: this.convertTemperature(
          api.temperature_2m_max[index],
          settings.temperatureUnit
        ),

        weatherCode: api.weather_code[index],

        description: weather.description,

        icon: weather.icon,

        isToday: index === 0

      };

    });

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

  /**
   * Date -> Jour
   */
  private formatDay(date: string): string {

    const today = new Date();

    const current = new Date(date);

    const diff = Math.floor(
      (
        current.getTime() -
        today.setHours(0, 0, 0, 0)
      ) / (1000 * 60 * 60 * 24)
    );

    if (diff === 0) {
      return "Aujourd'hui";
    }

    if (diff === 1) {
      return 'Demain';
    }

    return current.toLocaleDateString('fr-FR', {
      weekday: 'long'
    });

  }

}