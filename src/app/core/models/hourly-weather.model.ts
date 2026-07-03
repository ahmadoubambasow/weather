/**
 * ============================================================
 * HOURLY WEATHER MODEL
 * ============================================================
 */
export interface HourlyWeather {

    /** Températures heure par heure */
    temperature: number[];

    /** Codes météo heure par heure */
    weatherCode: number[];
}