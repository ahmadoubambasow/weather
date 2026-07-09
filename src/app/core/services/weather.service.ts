import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherApiResponse } from '../models/api/weather-api-response.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  
  /**
   * Injection du client HTTP
   */
  private readonly http = inject(HttpClient);

  /**
   * URL de base de l'API Open-Meteo
   */
  private readonly apiUrl = 'https://api.open-meteo.com/v1/forecast';

  /**
   * Récupère la météo d'une localisation
   * 
   * @param Latitude latitude
   * @param Longitude longitude
   */
  getWeather(
    latitude: number,
    longitude: number
  ): Observable<WeatherApiResponse> {

    const params = {

      latitude,

      longitude,

      current: [
        'temperature_2m',
        'relative_humidity_2m',
        'apparent_temperature',
        'weather_code',
        'wind_speed_10m',
        'surface_pressure',
        'uv_index'
      ].join(','),

       hourly: [
        'temperature_2m',
        'weather_code'
      ].join(','),

      daily: [
        'weather_code',
        'temperature_2m_max',
        'temperature_2m_min'
      ].join(','),

      timezone: 'auto'

    };

    return this.http.get<WeatherApiResponse>(this.apiUrl, { params });
  }

}
