import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonIcon, IonSearchbar } from '@ionic/angular/standalone';
import { debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs';
import { SearchFacade } from 'src/app/core/facades/search.facade';
import { WeatherLocation } from 'src/app/core/models/ui/weather-location.model';
import { SelectedLocationService } from 'src/app/core/services/selected-location.service';
import { SettingsService } from 'src/app/core/services/settings.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonIcon
  ]
})
export class SearchComponent  implements OnInit {

  query = '';

  results$: Observable<WeatherLocation[]> = of([]);

  private readonly searchFacade = inject(SearchFacade);

  private readonly searchSubject = new Subject<string>();

  private readonly selectedLocation = inject(SelectedLocationService);

  private readonly settingsService = inject(SettingsService);

  private readonly router = inject(Router);


  constructor(){


    this.results$ =

      this.searchSubject.pipe(


        debounceTime(400),


        distinctUntilChanged(),


        switchMap(query => {


          if(!query.trim()) {

            return of([]);

          }


          return this.searchFacade.search(query);


        })


      );


  }

  ngOnInit() {}

  search() {

    this.searchSubject.next(this.query);
  }


  async selectCity(city: WeatherLocation) {


    console.log(
      'Ville sélectionnée :',
      city
    );

    // Passage en mode manuel
    await this.settingsService.update({

      autoLocation: false
    });


    // Sauvegarde de la ville choisie
    this.selectedLocation.select(city);

    // Navigation
    this.router.navigate(['/tabs/weather']);
  }

  async useMyPosition(): Promise<void> {

    // Réactive la position automatique
    await this.settingsService.update({

      autoLocation: true
    });

    // Supprime la ville sélectionnée
    await this.selectedLocation.clear();

    // Retour à la météo
    this.router.navigate(['/tabs/weather']);
  }
  
}
