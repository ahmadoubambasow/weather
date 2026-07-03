/**
 * ============================================================
 * DAILY WEATHER MODEL
 * ============================================================
 */

export interface DailyWeather {

    /** Code météo (soleil, pluie, etc.) */
    weatherCode: number[];

    /** Température maximale */
    temperatureMax: number[];

    /** Température minimale */
    temperatureMin: number[];
}