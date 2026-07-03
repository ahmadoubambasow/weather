import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { WeatherService } from '../services/weather'; 
import { WeatherResponse } from 'src/app/core/models/weather-response.model'; 

@Injectable({
  providedIn: 'root'
})
export class WeatherFacadeService {

  constructor(
    private weatherService: WeatherService
  ) {}

  getWeather(lat: number, lon: number): Observable<WeatherResponse> {

    return this.weatherService.getWeather(lat, lon).pipe(

      map((response: any): WeatherResponse => {

        return {

          current: {
            temperature: response.current?.temperature_2m,
            humidity: response.current?.relative_humidity_2m,
            windSpeed: response.current?.wind_speed_10m,
            pressure: response.current?.pressure_msl
          },

          daily: {
            weatherCode: response.daily?.weather_code,
            temperatureMax: response.daily?.temperature_2m_max,
            temperatureMin: response.daily?.temperature_2m_min
          },

          hourly: {
            temperature: response.hourly?.temperature_2m,
            weatherCode: response.hourly?.weather_code
          },

          location: {
            lat,
            lon
          }

        };

      })

    );

  }

}