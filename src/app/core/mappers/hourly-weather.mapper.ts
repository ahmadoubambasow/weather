import { HourlyWeatherApi } from '../models/api/hourly-weather-api.model';
import { HourlyForecast } from '../models/ui/hourly-forecast.model';

/**
 * ============================================================
 * HourlyWeatherMapper
 * ============================================================
 *
 * Transforme les données brutes de l'API Open-Meteo
 * en données prêtes à être affichées dans l'interface.
 */

export class HourlyWeatherMapper {

    /**
     * Convertit les tableaux de l'API en une liste
     * d'objets HourlyForecast.
     */
    static toUiModel(api: HourlyWeatherApi): HourlyForecast[] {

        const forecasts: HourlyForecast[] = [];

        // On parcourt toutes les heures retournées par l'API
        for (let i = 0; i < api.time.length; i++) {

            forecasts.push({

                // On ne garde que l'heure
                time: api.time[i].substring(11, 16),

                temperature: api.temperature_2m[i],

                weatherCode: api.weather_code[i]
            });
        }

        return forecasts;
    }
}