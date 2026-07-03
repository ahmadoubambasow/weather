/**
 * ============================================================
 * DailyWeatherApi
 * ============================================================
 *
 * Prévisions quotidiennes.
 */

export interface DailyWeatherApi {

  /**
   * Dates.
   */
  time: string[];

  /**
   * Températures maximales.
   */
  temperature_2m_max: number[];

  /**
   * Températures minimales.
   */
  temperature_2m_min: number[];

  /**
   * Codes météo.
   */
  weather_code: number[];

}