/**
 * ============================================================
 * HourlyForecast
 * ============================================================
 *
 * Modèle utilisé UNIQUEMENT par l'interface graphique.
 *
 * Une instance = une heure.
 */

export interface HourlyForecast {

  /**
   * Heure
   * Exemple : 08:00
   */
  time: string;

  /**
   * Température
   */
  temperature: number;

  /**
   * Code météo Open-Meteo
   */
  weatherCode: number;

}