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

                icon: weather.icon
            };
        });

    }

    /**
     * Transforme une date ISO en jour de la semaine
     */
    private formatDay(date: string): string {

        return new Date(date).toLocaleDateString('fr-FR', { 
            weekday: 'short' 
        });

    }

}
