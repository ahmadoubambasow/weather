import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { CurrentWeatherCardComponent } from '../../components/current-weather-card/current-weather-card.component';
import { WeatherMetricCardComponent } from '../../components/weather-metric-card/weather-metric-card.component';
import { HourlyForecastComponent } from "../../components/hourly-forecast/hourly-forecast.component";
import { Observable } from 'rxjs';
import { Weather } from 'src/app/core/models/ui/weather.model';
import { WeatherFacade } from '../../../../core/facades/weather-facade';
import { WeatherDashboardViewModel } from 'src/app/core/models/ui/weather-dashboard.viewmodel';
import { GeolocationService } from 'src/app/core/services/geolocation';
import { DailyForecastComponent } from '../../components/daily-forecast/daily-forecast.component';
import { WeatherBackgroundComponent } from 'src/app/shared/ui/weather-background/weather-background.component';

@Component({
  selector: 'app-home-page',
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
   * Observable météo actuelle
   */
  dashboard$: Observable<WeatherDashboardViewModel>;

  private readonly geolocation = inject(GeolocationService)

  constructor(
  
    private weatherFacade: WeatherFacade,
  
  ) {

    this.dashboard$ = this.weatherFacade.getDashboard();
  
  }

  ngOnInit() {

    this.loadLocation();
    
  }

  async loadLocation() {

  try {

    const location =
      await this.geolocation.getCurrentLocation();

    console.log(location);

  }
  catch(error) {

    console.error(error);

  }

}
}
