import { LocationApi } from './location-api.model';

/**
 * ============================================================
 * GeocodingApiResponse
 * ============================================================
 *
 * Réponse complète de l'API de géocodage.
 */

export interface GeocodingApiResponse {

  /**
   * Résultats trouvés.
   */
  results: LocationApi[];

}