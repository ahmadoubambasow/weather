/**
 * Informations d'affichage associées
 * à un code météo Open-Meteo
 */
export interface WeatherCode {

     /**
   * Code Open-Meteo.
   */
  code: number;

  /**
   * Description en français.
   */
  description: string;

  /**
   * Nom de l'icône Ionic.
   */
  icon: string;

  /**
   * Classe CSS du fond.
   */
  background: string;

  /**
   * Animation associée.
   */
  animation: string;

}

