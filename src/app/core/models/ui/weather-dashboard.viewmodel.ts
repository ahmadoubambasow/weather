import { Weather } from './weather.model';
import { HourlyForecast } from './hourly-forecast.model';
import { DailyForecast } from './daily-forecast.model';
import { WeatherLocation } from './weather-location.model';

/**
 * ============================================================
 * WeatherDashboardViewModel
 * ============================================================
 *
 * Toutes les données nécessaires
 * à la page d'accueil.
 */

export interface WeatherDashboardViewModel {

  /**
   * Météo actuelle.
   */
  current: Weather;

  /**
   * Prévisions horaires.
   */
  hourly: HourlyForecast[];

  /**
   * Prévisions journalières.
   */
  daily: DailyForecast[];

  location?: WeatherLocation;

}