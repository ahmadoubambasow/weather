import { Injectable } from '@angular/core';

import { Geolocation } from '@capacitor/geolocation';

import { Location } from '../models/ui/location.model';

/**
 * ============================================================
 * GeolocationService
 * ============================================================
 *
 * Gestion de la géolocalisation.
 */

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  /**
   * Retourne la position actuelle.
   */
  async getCurrentLocation(): Promise<Location> {

    // Demande les permissions si nécessaire
    await Geolocation.requestPermissions();

    const permissions = await Geolocation.checkPermissions();

    /**if (permissions.location !== 'granted') {

      await Geolocation.requestPermissions();

    }*/

    // Récupère la position GPS
    const position = await Geolocation.getCurrentPosition({

      enableHighAccuracy: true,

      timeout: 10000

    });

    return {

      latitude: position.coords.latitude,

      longitude: position.coords.longitude

    };

  }

}