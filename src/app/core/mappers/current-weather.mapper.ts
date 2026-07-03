import { CurrentWeatherApi } from '../models/api/current-weather-api.model';
import { Weather } from '../models/ui/weather.model';

/**
 * ============================================================
 * CurrentWeatherMapper
 * ============================================================
 *
 * Transforme les données "current" de l'API
 * en modèle utilisé par l'interface.
 */
export class CurrentWeatherMapper {

  /**
   * Convertit les données API en modèle UI.
   *
   * @param api Données renvoyées par Open-Meteo
   * @param location Nom de la ville (sera fourni plus tard)
   */
  static toUiModel(
    api: CurrentWeatherApi,
    location: string = 'Position actuelle'
  ): Weather {

    return {

      location,

      temperature: api.temperature_2m,

      feelsLike: api.apparent_temperature,

      humidity: api.relative_humidity_2m,

      pressure: api.surface_pressure,

      windSpeed: api.wind_speed_10m,

      weatherCode: api.weather_code,

      // Temporaire : sera remplacé par WeatherCodeService
      description: 'Chargement...'

    };

  }

}