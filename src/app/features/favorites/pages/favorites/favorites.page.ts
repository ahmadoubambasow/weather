import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonIcon, IonSearchbar } from '@ionic/angular/standalone';

import { FavoritesService } from 'src/app/core/services/favorites.service';
import { WeatherLocation } from 'src/app/core/models/ui/weather-location.model';


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



  favorites$ =
    this.favoritesService.favorites$;



  async remove(
    location: WeatherLocation
  ){

    await this.favoritesService.remove(location);

  }


}