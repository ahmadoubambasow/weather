import { CurrentWeatherMapper } from '../mappers/current-weather.mapper';

import { Injectable, inject } from '@angular/core';
import { from, switchMap, map, Observable } from 'rxjs';

import { GeolocationService } from '../services/geolocation';
import { WeatherService } from '../services/weather.service';

import { Weather } from '../models/ui/weather.model';
import { WeatherApiResponse } from '../models/api/weather-api-response.model';
import { WeatherDashboardViewModel } from '../models/ui/weather-dashboard.viewmodel';
import { HourlyWeatherMapper } from '../mappers/hourly-weather.mapper';
import { DailyWeatherMarpper } from '../mappers/daily-weather.mapper';

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

  private readonly geolocationService = inject(GeolocationService);

  private readonly weatherService = inject(WeatherService);

  private readonly currentWeatherMapper = inject(CurrentWeatherMapper);

  private readonly hourlyWeatherMapper = inject(HourlyWeatherMapper);

  private readonly dailyWeatherMapper = inject(DailyWeatherMarpper);

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

  getDashboard(): Observable<WeatherDashboardViewModel> {

    return from(

        this.geolocationService.getCurrentLocation()

      ).pipe(

        switchMap(location =>

          this.weatherService.getWeather(

            location.latitude,

            location.longitude

          )

        ),

        map(response => ({

          current: this.currentWeatherMapper.toUiModel(

            response.current,

            'Ma position'

          ),

          hourly: this.hourlyWeatherMapper.toUiModel(

            response.hourly

          ),

          daily: this.dailyWeatherMapper.toUiModel(

            response.daily

          )

        }))

      );

  }

}