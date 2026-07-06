import { CurrentWeatherMapper } from '../mappers/current-weather.mapper';

import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';

import { WeatherService } from '../services/weather.service';

import { Weather } from '../models/ui/weather.model';
import { WeatherApiResponse } from '../models/api/weather-api-response.model';
import { WeatherDashboardViewModel } from '../models/ui/weather-dashboard.viewmodel';

/**
 * ============================================================
 * WeatherFacade
 * ============================================================
 *
 * Point d'entrée unique pour l'UI.
 * Elle orchestre service + mappers.
 */
@Injectable({
  providedIn: 'root'
})
export class WeatherFacade {

  private readonly weatherService = inject(WeatherService);

  private readonly currentWeatherMapper =
  inject(CurrentWeatherMapper);

  /**
   * Retourne la météo actuelle déjà transformée
   * pour l'interface utilisateur.
   */
  getCurrentWeather(
    latitude: number,
    longitude: number
  ): Observable<Weather> {

    return this.weatherService.getWeather(latitude, longitude).pipe(

      map((response: WeatherApiResponse) => {

        // On transforme uniquement la partie "current"
        return this.currentWeatherMapper.toUiModel(
          response.current,
          'Dakar' 
        );

      })

    );

  }

  getDashboard(
    latitude: number,
    longitude: number
  ): Observable<WeatherDashboardViewModel> {

    return this.weatherService
      .getWeather(latitude, longitude)
      .pipe(

        map(response => ({

          current: this.currentWeatherMapper.toUiModel(
            response.current,
            'Dakar'
          ),

          // Temporaire
          hourly: [],

          // Temporaire
          daily: []

        }))

      );

  }

}