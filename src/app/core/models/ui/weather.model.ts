/**
 * ============================================================
 * Weather
 * ============================================================
 *
 * Modèle utilisé par l'interface graphique.
 */
export interface Weather {

  location: string;

  temperature: number;

  feelsLike: number;

  humidity: number;

  pressure: number;

  windSpeed: number;

  weatherCode: number;

  description: string;

}