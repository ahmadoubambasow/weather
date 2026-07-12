/**
 * ============================================================
 * LocationApi
 * ============================================================
 *
 * Représente une localisation renvoyée
 * par l'API Open-Meteo Geocoding.
 */

export interface LocationApi {

  /**
   * Identifiant.
   */
  id: number;

  /**
   * Nom de la ville.
   */
  name: string;

  /**
   * Latitude.
   */
  latitude: number;

  /**
   * Longitude.
   */
  longitude: number;

  /**
   * Pays.
   */
  country: string;

  /**
   * Région.
   */
  admin1?: string;

}