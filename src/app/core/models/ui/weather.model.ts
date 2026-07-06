/**
 * ============================================================
 * Weather
 * ============================================================
 * Modèle utilisé par l'interface.
 */

export interface Weather {

  /**
   * Nom de la localisation.
   */
  location: string;

  /**
   * Température actuelle.
   */
  temperature: number;

  /**
   * Température ressentie.
   */
  feelsLike: number;

  /**
   * Humidité.
   */
  humidity: number;

  /**
   * Pression.
   */
  pressure: number;

  /**
   * Vent.
   */
  windSpeed: number;

  /**
   * Code météo Open-Meteo.
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

  /**
   * Classe CSS du fond.
   */
  background: string;

  /**
   * Animation.
   */
  animation: string;

}