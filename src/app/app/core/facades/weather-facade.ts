/**
 * ============================================================
 * WeatherFacadeService
 * ============================================================
 *
 * Couche intermédiaire entre UI et services métier.
 *
 * RESPONSABILITÉ :
 * - Transformer les données météo
 * - Simplifier les appels pour les pages
 * - Isoler la logique métier de l'UI
 */

import { Injectable } from '@angular/core';
import { WeatherService } from '../services/weather';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherFacade {
  
  constructor(
    private weatherService: WeatherService
  ) { }

  /**
   * Récupérer les données météo et les transformer
   * pour l'affichage UI.
   */
  getWeather(lat: number, lon: number): Observable<any> {

    return this.weatherService.getWeather(lat, lon).pipe(

      map((response: any) => {

        /**
         * TRANSFORMATION DES DONNEES
         */

        return {

          current: {
            temperature: response.current?.temperature_2m,
            windSpeed: response.current?.wind_speed_10m,
            humidity: response.current?.relative_humidity_2m,
            pressure: response.current?.pressure_msl
          },
          
          daily: response.daily,

          hourly: response.hourly,

          location: {
            lat,
            lon
          }
        };
      })
    );
  }

}
