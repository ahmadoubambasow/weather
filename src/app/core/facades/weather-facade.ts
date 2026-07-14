import { Injectable, inject } from '@angular/core';
import {
  Observable,
  from,
  switchMap,
  map,
  combineLatest
} from 'rxjs';

import { CurrentWeatherMapper } from '../mappers/current-weather.mapper';
import { HourlyWeatherMapper } from '../mappers/hourly-weather.mapper';
import { DailyWeatherMarpper } from '../mappers/daily-weather.mapper';

import { GeolocationService } from '../services/geolocation';
import { WeatherService } from '../services/weather.service';
import { SelectedLocationService } from '../services/selected-location.service';
import { SettingsService } from '../services/settings.service';

import { Weather } from '../models/ui/weather.model';
import { WeatherApiResponse } from '../models/api/weather-api-response.model';
import { WeatherDashboardViewModel } from '../models/ui/weather-dashboard.viewmodel';
import { AppSettings } from '../models/ui/settings.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherFacade {

  private readonly geolocationService =
    inject(GeolocationService);

  private readonly weatherService =
    inject(WeatherService);

  private readonly currentWeatherMapper =
    inject(CurrentWeatherMapper);

  private readonly hourlyWeatherMapper =
    inject(HourlyWeatherMapper);

  private readonly dailyWeatherMapper =
    inject(DailyWeatherMarpper);

  private readonly selectedLocation =
    inject(SelectedLocationService);

  private readonly settingsService =
    inject(SettingsService);

  /**
   * ============================================================
   * Météo actuelle
   * ============================================================
   */
  getCurrentWeather(
    latitude: number,
    longitude: number
  ): Observable<Weather> {

    return this.settingsService.settings$.pipe(

      switchMap(settings =>

        this.weatherService.getWeather(
          latitude,
          longitude
        ).pipe(

          map((response: WeatherApiResponse) =>

            this.currentWeatherMapper.toUiModel(
              response.current,
              'Dakar',
              settings
            )

          )

        )

      )

    );

  }

  /**
   * ============================================================
   * Dashboard principal
   * ============================================================
   */
  getDashboard(): Observable<WeatherDashboardViewModel> {

    return combineLatest([

      this.selectedLocation.location$,

      this.settingsService.settings$

    ]).pipe(

      switchMap(([selected, settings]) => {

        console.log('AutoLocation :', settings.autoLocation);
        console.log('Ville sélectionnée :', selected);

        /**
         * ==========================================================
         * 1. Position automatique activée → GPS
         * ==========================================================
         */
        if (settings.autoLocation) {

          return from(

            this.geolocationService.getCurrentLocation()

          ).pipe(

            switchMap(position =>

              this.weatherService.getWeather(

                position.latitude,

                position.longitude

              ).pipe(

                map(response => this.buildDashboard(

                  response,

                  settings,

                  'Ma position',

                  '',

                  '',

                  position.latitude,

                  position.longitude

                ))

              )

            )

          );

        }

        /**
         * ==========================================================
         * 2. Position automatique désactivée → ville choisie
         * ==========================================================
         */
        if (selected) {

          return this.weatherService.getWeather(

            selected.latitude,

            selected.longitude

          ).pipe(

            map(response => this.buildDashboard(

              response,

              settings,

              selected.name,

              selected.country,

              selected.region,

              selected.latitude,

              selected.longitude

            ))

          );

        }

        /**
         * ==========================================================
         * 3. Aucune ville → GPS en secours
         * ==========================================================
         */
        return from(

          this.geolocationService.getCurrentLocation()

        ).pipe(

          switchMap(position =>

            this.weatherService.getWeather(

              position.latitude,

              position.longitude

            ).pipe(

              map(response => this.buildDashboard(

                response,

                settings,

                'Ma position',

                '',

                '',

                position.latitude,

                position.longitude

              ))

            )

          )

        );

      })

    );

  }

  /**
   * ============================================================
   * Dashboard d'une ville choisie
   * ============================================================
   */
  getDashboardByLocation(
    latitude: number,
    longitude: number,
    locationName: string,
    country: string,
    region: string
  ): Observable<WeatherDashboardViewModel> {

    return this.settingsService.settings$.pipe(

      switchMap(settings =>

        this.weatherService.getWeather(
          latitude,
          longitude
        ).pipe(

          map(response => this.buildDashboard(

            response,

            settings,

            locationName,

            country,

            region,

            latitude,

            longitude

          ))

        )

      )

    );

  }

  /**
   * ============================================================
   * Construction du Dashboard
   * ============================================================
   */
  private buildDashboard(
    response: WeatherApiResponse,
    settings: AppSettings,
    name: string,
    country: string,
    region: string,
    latitude: number,
    longitude: number
  ): WeatherDashboardViewModel {

    return {

      current: this.currentWeatherMapper.toUiModel(

        response.current,

        name,

        settings

      ),

      hourly: this.hourlyWeatherMapper.toUiModel(

        response.hourly,

        settings

      ),

      daily: this.dailyWeatherMapper.toUiModel(

        response.daily,

        settings

      ),

      location: {

        name,

        country,

        region,

        latitude,

        longitude

      }

    };

  }

}