import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

import { Observable, switchMap } from 'rxjs';

import { CurrentWeatherCardComponent } from '../../components/current-weather-card/current-weather-card.component';
import { WeatherMetricCardComponent } from '../../components/weather-metric-card/weather-metric-card.component';
import { HourlyForecastComponent } from '../../components/hourly-forecast/hourly-forecast.component';
import { DailyForecastComponent } from '../../components/daily-forecast/daily-forecast.component';

import { WeatherBackgroundComponent } from 'src/app/shared/ui/weather-background/weather-background.component';

import { WeatherFacade } from 'src/app/core/facades/weather-facade';
import { WeatherDashboardViewModel } from 'src/app/core/models/ui/weather-dashboard.viewmodel';
import { GeolocationService } from 'src/app/core/services/geolocation';
import { SelectedLocationService } from 'src/app/core/services/selected-location.service';
import { FavoritesService } from 'src/app/core/services/favorites.service';
import { WeatherLocation } from 'src/app/core/models/ui/weather-location.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [
    CommonModule,
    IonContent,
    CurrentWeatherCardComponent,
    WeatherMetricCardComponent,
    HourlyForecastComponent,
    DailyForecastComponent,
    WeatherBackgroundComponent
  ]
})
export class HomePage implements OnInit {

  /**
   * Dashboard météo
   */
  dashboard$: Observable<WeatherDashboardViewModel>;

  /**
   * Services
   */
  private readonly geolocation = inject(GeolocationService);

  private readonly selectedLocation =
    inject(SelectedLocationService);

  private readonly favoritesService =
    inject(FavoritesService);

  constructor(
    private readonly weatherFacade: WeatherFacade
  ) {

    this.dashboard$ = this.selectedLocation.location$.pipe(

      switchMap(location => {

        if (location) {

          return this.weatherFacade.getDashboardByLocation(

            location.latitude,

            location.longitude,

            location.name

          );

        }

        return this.weatherFacade.getDashboard();

      })

    );

  }

  async ngOnInit(): Promise<void> {

    await this.selectedLocation.restore();

  }

  /**
   * Vérifie si la météo affichée est dans les favoris
   */
  isFavorite(
    dashboard: WeatherDashboardViewModel
  ): boolean {

    return this.favoritesService.isFavorite({

      name: dashboard.current.location,

      latitude: dashboard.current.latitude,

      longitude: dashboard.current.longitude,

      country: dashboard.current.country ?? '',

      region: dashboard.current.region ?? ''

    });

  }

  /**
   * Ajoute ou retire des favoris
   */
  async addToFavorites(
    dashboard: WeatherDashboardViewModel
  ): Promise<void> {

    const location: WeatherLocation = {

      name: dashboard.current.location,

      latitude: dashboard.current.latitude,

      longitude: dashboard.current.longitude,

      country: dashboard.current.country ?? '',

      region: dashboard.current.region ?? ''

    };

    await this.favoritesService.toggle(location);

  }

  async loadLocation() {

    try {

      const location =
        await this.geolocation.getCurrentLocation();

      console.log(location);

    } catch (error) {

      console.error(error);

    }

  }

}