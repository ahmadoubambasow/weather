import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WeatherLocation } from '../models/ui/weather-location.model';
import { PreferencesService } from './preferences.service';


/**
 * ============================================================
 * SelectedLocationService
 * ============================================================
 *
 * Stocke la ville choisie par l'utilisateur.
 *
 * Utilisé entre :
 * - SearchPage
 * - WeatherPage
 */

@Injectable({
  providedIn:'root'
})
export class SelectedLocationService {


  private readonly locationSubject =
    new BehaviorSubject<WeatherLocation | null>(null);

  private readonly STORAGE_KEY =
  'selected_location';

  private readonly preferences = inject(PreferencesService);

  location$ =
    this.locationSubject.asObservable();


  async select(location:WeatherLocation){


    this.locationSubject.next(location);

    await this.preferences.set(

    this.STORAGE_KEY,

    location

    );

  }



  get current(){

    return this.locationSubject.value;

  }

  async clear(): Promise<void> {

    this.locationSubject.next(null);
  
    await this.preferences.remove(this.STORAGE_KEY);
  
  }

  async restore():Promise<void> {

  const location =

    await this.preferences.get<WeatherLocation>(

      this.STORAGE_KEY

    );

  if(location){

    this.locationSubject.next(location);

  }


}
}