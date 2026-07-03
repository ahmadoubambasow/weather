import { CurrentWeather } from "./current-weather.model";
import { DailyWeather } from "./daily-weather.model";
import { HourlyWeather } from "./hourly-weather.model";

/**
 * ============================================================
 * WEATHER RESPONSE MODEL
 * ============================================================
 */

export interface WeatherResponse {

    /** Données actuelles */
    current: CurrentWeather;

    /** Prévisions journalières */
    daily: DailyWeather;

    /** Prévisions horaires */
    hourly: HourlyWeather;

    /** Coordonnées */
    location: {
        lat: number;
        lon: number;
    }
}