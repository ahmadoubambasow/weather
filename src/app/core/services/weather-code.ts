import { Injectable } from '@angular/core';
import { WeatherCode } from '../models/ui/weather-code.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherCodeService {

  /**
   * Correspondance des codes Open-Meteo.
   */
  private readonly weatherCodes: Record<number, WeatherCode> = {

    0: {
      code: 0,
      description: 'Ensoleillé',
      icon: 'sunny-outline',
      background: 'sunny',
      animation: 'sun'
    },

    1: {
      code: 1,
      description: 'Principalement dégagé',
      icon: 'partly-sunny-outline',
      background: 'sunny',
      animation: 'sun'
    },

    2: {
      code: 2,
      description: 'Partiellement nuageux',
      icon: 'partly-sunny-outline',
      background: 'cloudy',
      animation: 'cloud'
    },

    3: {
      code: 3,
      description: 'Couvert',
      icon: 'cloud-outline',
      background: 'cloudy',
      animation: 'cloud'
    },

    61: {
      code: 61,
      description: 'Pluie faible',
      icon: 'rainy-outline',
      background: 'rain',
      animation: 'rain'
    },

    63: {
      code: 63,
      description: 'Pluie',
      icon: 'rainy-outline',
      background: 'rain',
      animation: 'rain'
    },

    95: {
      code: 95,
      description: 'Orage',
      icon: 'thunderstorm-outline',
      background: 'storm',
      animation: 'storm'
    }

  };

  /**
   * Retourne les informations liées à un code météo.
   */
  get(code: number): WeatherCode {

    return this.weatherCodes[code] ?? {

      code,

      description: 'Conditions inconnues',

      icon: 'help-circle-outline',

      background: 'default',

      animation: 'none'

    };

  }

}