import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GeocodingApiResponse } from '../models/api/geocoding-api-response.model';

/**
 * ============================================================
 * GeocodingService
 * ============================================================
 *
 * Service responsable de la recherche
 * de villes via l'API Open-Meteo Geocoding.
 */

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  /**
   * Client HTTP.
   */
  private readonly http = inject(HttpClient);

  /**
   * URL de l'API.
   */
  private readonly apiUrl =
    'https://geocoding-api.open-meteo.com/v1/search';

  /**
   * Recherche une ville.
   *
   * @param query Nom de la ville.
   */
  search(query: string): Observable<GeocodingApiResponse> {

    return this.http.get<GeocodingApiResponse>(
      this.apiUrl,
      {
        params: {
          name: query,
          count: 10,
          language: 'fr',
          format: 'json'
        }
      }
    );

  }

}