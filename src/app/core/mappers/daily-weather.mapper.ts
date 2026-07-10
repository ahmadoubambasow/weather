import { inject, Injectable } from "@angular/core";
import { WeatherCodeService } from "../services/weather-code";
import { DailyWeatherApi } from "../models/api/daily-weather-api.model";
import { DailyForecast } from "../models/ui/daily-forecast.model";

/**
 * ============================================================
 * DailyWeatherMapper
 * ============================================================
 *
 * Transforme les prévisions journalières
 * de l'API en données prêtes pour l'interface.
 */
@Injectable({
    providedIn: 'root'
})
export class DailyWeatherMarpper {

    private readonly weatherCodeService = inject(WeatherCodeService);

    /**
     * API -> UI
     */
    toUiModel(api: DailyWeatherApi): DailyForecast[] {

        return api.time.map((date, index) => {

            const weather = this.weatherCodeService.get(api.weather_code[index]);
        
            return {

                day: this.formatDay(date),

                minTemperature: api.temperature_2m_min[index],

                maxTemperature: api.temperature_2m_max[index],

                weatherCode: api.weather_code[index],

                description: weather.description,

                icon: weather.icon,

                isToday: index === 0
            };
        });

    }

    /**
     * Transforme une date ISO en jour de la semaine
     */
    private formatDay(date:string):string {


    const today = new Date();

    const current =
        new Date(date);



    const diff =
        Math.floor(

        (
            current.getTime()
            -
            today.setHours(0,0,0,0)

        )
        /
        (1000*60*60*24)

        );



    if(diff === 0){

        return "Aujourd'hui";

    }



    if(diff === 1){

        return "Demain";

    }



    return current.toLocaleDateString(
        'fr-FR',
        {
        weekday:'long'
        }
    );


    }

}
