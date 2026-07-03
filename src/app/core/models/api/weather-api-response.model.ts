import { CurrentWeatherApi } from './current-weather-api.model';
import { DailyWeatherApi } from './daily-weather-api.model';
import { HourlyWeatherApi } from './hourly-weather-api.model';

/**
 * ============================================================
 * WeatherApiResponse
 * ============================================================
 *
 * Réponse complète de l'API Open-Meteo.
 */

export interface WeatherApiResponse {

  /**
   * Données météo actuelles.
   */
  current: CurrentWeatherApi;

  /**
   * Prévisions horaires.
   */
  hourly: HourlyWeatherApi;

  /**
   * Prévisions journalières.
   */
  daily: DailyWeatherApi;

}