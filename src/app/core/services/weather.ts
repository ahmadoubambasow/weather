/**
 * ============================================================
 * WeatherService
 * ============================================================
 *
 * Service métier pour la météo.
 *
 * Rôle :
 * - appeler Open-Meteo
 * - structurer les données météo
 * - isoler la logique API du reste de l'app
 */

import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { Observable } from 'rxjs';

import { API_CONFIG } from 'src/app/core/config/api.config';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  
  constructor(private api: ApiService) { }

  /**
   * Récupérer météo actuelle + prévisions
   */
  getWeather(lat: number, lon: number): Observable<any> {
    
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.FORECAST}`;
  
    const params = new HttpParams()
      .set('latitude', lat)
      .set('longitude', lon)
      .set(
        'current',
        'temperature_2m,relative_humidity_2m,wind_speed_10m,pressure_msl'
      )
      .set(
        'hourly',
        'temperature_2m,weather_code'
      )
      .set(
        'daily',
        'weather_code,temperature_2m_max,temperature_2m_min'
      )
      .set('timezone', 'auto');

    return this.api.get<any>(url, params);
  
  }
}
