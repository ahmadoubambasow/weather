/**
 * ============================================================
 * Home ViewModel
 * ============================================================
 *
 * Ce modèle représente exactement les données dont
 * la HomePage a besoin pour l'affichage.
 */

export interface HomeViewModel {

    location: string;

    temperature: number;

    description: string;

    feelsLike: number;

    humidity: number;

    pressure: number;

    windSpeed: number;

    uvIndex: number;
}