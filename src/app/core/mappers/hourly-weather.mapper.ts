import { Injectable } from '@angular/core';

import { HourlyWeatherApi } from '../models/api/hourly-weather-api.model';

import { HourlyForecast } from '../models/ui/hourly-forecast.model';


/**
 * ============================================================
 * HourlyWeatherMapper
 * ============================================================
 *
 * Transforme les données horaires Open-Meteo
 * en données utilisables par l'interface.
 *
 * API :
 *
 * time:[]
 * temperature_2m:[]
 * weather_code:[]
 *
 *
 * UI :
 *
 * [
 *   {
 *    time,
 *    temperature,
 *    weatherCode
 *   }
 * ]
 *
 * ============================================================
 */


@Injectable({
  providedIn:'root'
})
export class HourlyWeatherMapper {



  /**
   * Conversion API → UI
   */
  toUiModel(

    api: HourlyWeatherApi

  ): HourlyForecast[] {


    return api.time.map(

      (time,index)=>{


        return {


          /**
           * Heure affichée
           */
          time:

            new Date(time)
            .toLocaleTimeString(

              'fr-FR',

              {
                hour:'2-digit',
                minute:'2-digit'
              }

            ),



          /**
           * Température associée
           */
          temperature:

            api.temperature_2m[index],



          /**
           * Code météo
           */
          weatherCode:

            api.weather_code[index]


        };


      }

    );


  }


}