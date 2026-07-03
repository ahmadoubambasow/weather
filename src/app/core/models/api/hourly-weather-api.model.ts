/**
 * ============================================================
 * HourlyWeatherApi
 * ============================================================
 *
 * Représente la partie "hourly" renvoyée par l'API Open-Meteo.
 *
 * Exemple de réponse :
 *
 * {
 *   "hourly": {
 *     "time": ["2026-07-03T08:00", "2026-07-03T09:00"],
 *     "temperature_2m": [24.3, 25.1],
 *     "weather_code": [0, 1]
 *   }
 * }
 *
 * IMPORTANT :
 * Les propriétés gardent exactement les noms de l'API.
 */

export interface HourlyWeatherApi {

    /**
     * Dates/heures ISO
     */
    time: string[];

    /**
     * temperature à 2 mètres
     */
    temperature_2m: number[];

    /**
     * Codes météo Open-Meteo
     */
    weather_code: number[];
     
}