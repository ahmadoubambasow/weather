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
import { SelectedLocationService } from '../services/selected-location.service';

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

  private readonly selectedLocation =
  inject(SelectedLocationService);

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


  return this.selectedLocation.location$.pipe(


    switchMap(selected => {


      /**
       * Une ville a été choisie
       */
      if(selected){


        return this.weatherService.getWeather(

          selected.latitude,

          selected.longitude

        );


      }


      /**
       * Sinon utilisation GPS
       */
      return from(

        this.geolocationService.getCurrentLocation()

      ).pipe(


        switchMap(location =>


          this.weatherService.getWeather(

            location.latitude,

            location.longitude

          )

        )

      );


    }),



      map(response => {


  const selected =
    this.selectedLocation.current;



  return {


    current:

      this.currentWeatherMapper.toUiModel(

        response.current,

        selected?.name ?? 'Ma position'

      ),



    hourly:

      this.hourlyWeatherMapper.toUiModel(

        response.hourly

      ),



    daily:

      this.dailyWeatherMapper.toUiModel(

        response.daily

      ),

      location: selected ?? undefined


  };


})


  );


}

  /**
 * ============================================================
 * getDashboardByLocation
 * ============================================================
 *
 * Charge la météo d'une localisation choisie
 * par l'utilisateur.
 *
 * Utilisé par :
 * SearchPage
 */

getDashboardByLocation(
  latitude: number,
  longitude: number,
  locationName: string,
  country: string,
  region: string
): Observable<WeatherDashboardViewModel> {


  return this.weatherService.getWeather(

    latitude,

    longitude

  ).pipe(


    map(response => ({


      current:

        this.currentWeatherMapper.toUiModel(

          response.current,

          locationName

        ),


      hourly:

        this.hourlyWeatherMapper.toUiModel(

          response.hourly

        ),


      daily:

        this.dailyWeatherMapper.toUiModel(

          response.daily

        ),


      location: {

        name: locationName,

        latitude,

        longitude,

        country,

        region

      }


    }))


  );


}

}