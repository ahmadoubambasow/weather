import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { WeatherLocation } from '../models/ui/weather-location.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  /**
   * Clé de stockage
   */
  private readonly STORAGE_KEY = 'favorite_locations';

  /**
   * Service de stockage
   */
  private readonly storage = inject(StorageService);

  /**
   * Favoris en mémoire
   */
  private readonly favoritesSubject =
    new BehaviorSubject<WeatherLocation[]>([]);

  /**
   * Observable utilisé par l'UI
   */
  readonly favorites$ =
    this.favoritesSubject.asObservable();

  constructor() {

    this.load();

  }

  /**
   * Charge les favoris sauvegardés
   */
  async load(): Promise<void> {

    const favorites =
      await this.storage.get<WeatherLocation[]>(
        this.STORAGE_KEY
      );

    this.favoritesSubject.next(
      favorites ?? []
    );

  }

  /**
 * Ajoute une ville aux favoris
 */
  async add(
    location: WeatherLocation
  ): Promise<void> {

    const favorites = [
      ...this.favoritesSubject.value
    ];
      console.log('Favoris:', favorites )

    const exists = favorites.some(


      city =>

        city.latitude === location.latitude &&

        city.longitude === location.longitude

    );

    if (exists) {

      return;

    }

    favorites.push(location);

    this.favoritesSubject.next(favorites);

    await this.storage.set(

      this.STORAGE_KEY,

      favorites

    );

  }

  /**
 * Supprime une ville des favoris
 */
  async remove(
    location: WeatherLocation
  ): Promise<void> {

    const favorites = this.favoritesSubject.value.filter(

      city =>

        !(

          city.latitude === location.latitude &&

          city.longitude === location.longitude

        )

    );

    this.favoritesSubject.next(favorites);

    await this.storage.set(

      this.STORAGE_KEY,

      favorites

    );

  }


  /**
 * Vérifie si une ville est favorite
 */
  isFavorite(
    location: WeatherLocation
  ): boolean {

    return this.favoritesSubject.value.some(

      city =>

        city.latitude === location.latitude &&

        city.longitude === location.longitude

    );

  }

  /**
 * Ajoute ou retire une ville des favoris
 */
  async toggle(
    location: WeatherLocation
  ): Promise<void> {

    if (this.isFavorite(location)) {

      await this.remove(location);

      return;

    }

    await this.add(location);

  }
}