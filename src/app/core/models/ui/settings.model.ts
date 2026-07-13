export interface AppSettings {


  /**
   * Unité température
   */
  temperatureUnit:
    'celsius'
    |
    'fahrenheit';



  /**
   * Unité vitesse vent
   */
  windUnit:
    'kmh'
    |
    'mph';



  /**
   * Utilisation GPS automatique
   */
  autoLocation:boolean;



  /**
   * Notifications météo
   */
  notifications:boolean;



  /**
   * Thème
   */
  darkMode:boolean;


}