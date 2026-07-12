import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { LocationMapper } from '../mappers/location.mapper';
import { Location } from '../models/ui/location.model';
import { GeocodingService } from '../services/geocoding';
import { WeatherLocation } from '../models/ui/weather-location.model';

/**
 * ============================================================
 * SearchFacade
 * ============================================================
 *
 * Point d'entrée de la fonctionnalité de recherche.
 *
 * Elle orchestre :
 * - GeocodingService
 * - LocationMapper
 */

@Injectable({
  providedIn: 'root'
})
export class SearchFacade {

  /**
   * Service de géocodage.
   */
  private readonly geocodingService = inject(GeocodingService);

  /**
   * Mapper API → UI.
   */
  private readonly locationMapper = inject(LocationMapper);

  /**
   * Recherche des villes.
   *
   * @param query Nom de la ville.
   */
  search(query: string): Observable<WeatherLocation[]> {

    return this.geocodingService.search(query).pipe(

      map(response => {

        if (!response.results) {
          return [];
        }

        return this.locationMapper.toUiModels(
          response.results
        );

      })

    );

  }

}