/**
 * ============================================================
 * Location
 * ============================================================
 *
 * Position GPS de l'utilisateur.
 */

export interface WeatherLocation {

   /**
   * Nom de la ville.
   */
  name: string;

  /**
   * Pays.
   */
  country: string;

  /**
   * Région.
   */
  region: string;

  /**
   * Latitude.
   */
  latitude: number;

  /**
   * Longitude.
   */
  longitude: number;

}
