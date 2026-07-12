/**
 * ============================================================
 * CurrentWeatherApi
 * ============================================================
 *
 * Représente l'objet "current"
 * renvoyé par Open-Meteo.
 */

export interface CurrentWeatherApi {

  /**
   * Température actuelle.
   */
  temperature_2m: number;

  /**
   * Température ressentie.
   */
  apparent_temperature: number;

  /**
   * Humidité relative.
   */
  relative_humidity_2m: number;

  /**
   * Vitesse du vent.
   */
  wind_speed_10m: number;

  /**
   * Pression atmosphérique.
   */
  surface_pressure: number;

  /**
   * Code météo.
   */
  weather_code: number;

  uv_index: number;

  longitude: number;

  latitude: number;

  country?: string;

  region?: string;

}