import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ReverseGeocodingResponse } from '../models/api/reverse-geocoding-response.model';

@Injectable({
  providedIn: 'root'
})
export class ReverseGeocodingService {

  private readonly http = inject(HttpClient);

  /**
   * Recherche la ville la plus proche
   * des coordonnées.
   */
  reverse(
    latitude: number,
    longitude: number
  ): Observable<ReverseGeocodingResponse> {

    return this.http.get<ReverseGeocodingResponse>(

      'https://geocoding-api.open-meteo.com/v1/reverse',

      {

        params: {

          latitude,

          longitude,

          language: 'fr',

          format: 'json'

        }

      }

    );

  }

}