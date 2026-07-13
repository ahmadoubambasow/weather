import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

import { FavoritesService } from 'src/app/core/services/favorites.service';
import { WeatherLocation } from 'src/app/core/models/ui/weather-location.model';
import { SelectedLocationService } from 'src/app/core/services/selected-location.service';


@Component({

  selector: 'app-favorites',

  templateUrl: './favorites.page.html',

  styleUrls: ['./favorites.page.scss'],

  standalone:true,

  imports:[

    CommonModule,

    IonContent,

    IonIcon

  ]

})
export class FavoritesPage {


  private readonly favoritesService =
    inject(FavoritesService);


  private readonly selectedLocation =
    inject(SelectedLocationService);


  private readonly router =
    inject(Router);



  favorites$ =
    this.favoritesService.favorites$;



  /**
   * Sélectionner une ville favorite
   */
  async openWeather(
    city: WeatherLocation
  ): Promise<void> {

    console.log('ville choisie:', city);
    
    if(
      !city.latitude ||
      !city.longitude
    ){

      console.error(
        'Coordonnées manquantes',
        city
      );

      return;

    }

    await this.selectedLocation.select(city);


    await this.router.navigate([

      '/tabs/weather'

    ]);

  }



  /**
   * Supprimer un favori
   */
  async remove(
    location: WeatherLocation
  ): Promise<void> {


    await this.favoritesService.remove(location);


  }


}