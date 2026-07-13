import { DOCUMENT, Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { StorageService } from './storage.service';
import { AppSettings } from '../models/ui/settings.model';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  /**
   * Clé stockage local
   */
  private readonly STORAGE_KEY = 'settings';



  private readonly storage =
    inject(StorageService);

  private readonly document =
   inject(DOCUMENT);

  /**
   * Configuration par défaut
   */
  private readonly defaultSettings: AppSettings = {


    temperatureUnit: 'celsius',

    windUnit: 'kmh',

    autoLocation: true,

    notifications: true,

    darkMode: false

  };



  /**
   * Etat courant
   */
  private readonly settingsSubject =
    new BehaviorSubject<AppSettings>(
      this.defaultSettings
    );



  /**
   * Observable public
   */
  readonly settings$ =
    this.settingsSubject.asObservable();



  constructor(){

    this.load();

  }




  /**
   * Chargement des paramètres
   */
  async load(): Promise<void>{


    const saved =
      await this.storage.get<AppSettings>(
        this.STORAGE_KEY
      );



    const settings =
        saved ?? this.defaultSettings;


        this.settingsSubject.next(settings);


        this.applyTheme(
        settings.darkMode
        );


  }





  /**
   * Mise à jour partielle
   */
  async update(
    settings: Partial<AppSettings>
  ): Promise<void>{

    console.log('Nouveaux réglages:', settings);

    const current =
      this.settingsSubject.value;



    const updated: AppSettings = {


      ...current,

      ...settings


    };

    console.log('Sttings final:', updated);

    this.settingsSubject.next(updated);

    if(
        settings.darkMode !== undefined
    ){

        this.applyTheme(
            updated.darkMode
        );

    }

    await this.storage.set(

      this.STORAGE_KEY,

      updated

    );


  }





  /**
   * Accès synchrone
   */
  get current(): AppSettings {

    return this.settingsSubject.value;

  }



  private applyTheme(
    enabled:boolean
    ):void {


    if(enabled){

        this.document.body.classList.add(
        'dark'
        );

    }else{


        this.document.body.classList.remove(
        'dark'
        );


    }


    }

}