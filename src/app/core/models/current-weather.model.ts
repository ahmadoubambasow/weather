/**
 * ============================================================
 * CURRENT WEATHER MODEL
 * ============================================================
 */
export interface CurrentWeather {

    /** Température actuelle */
    temperature: number;

    /** Humidité (%) */
    humidity: number;

    /** Vitesse du vent */
    windSpeed: number;

    /** Pression atmosphérique */
    pressure: number;
}