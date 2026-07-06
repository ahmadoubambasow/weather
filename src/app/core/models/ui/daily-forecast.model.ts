/**
 * ============================================================
 * DailyForecast
 * ============================================================
 *
 * Prévision météo d'une journée.
 */

export interface DailyForecast {

  /**
   * Jour affiché.
   * Exemple : Lun
   */
  day: string;

  /**
   * Température minimale.
   */
  minTemperature: number;

  /**
   * Température maximale.
   */
  maxTemperature: number;

  /**
   * Code météo.
   */
  weatherCode: number;

  /**
   * Description.
   */
  description: string;

  /**
   * Icône Ionic.
   */
  icon: string;

}