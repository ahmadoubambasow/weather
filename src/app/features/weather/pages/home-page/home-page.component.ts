import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { CurrentWeatherCardComponent } from '../../components/current-weather-card/current-weather-card.component';
import { WeatherMetricCardComponent } from '../../components/weather-metric-card/weather-metric-card.component';
import { HourlyForecastComponent } from "../../components/hourly-forecast/hourly-forecast.component";
import { Observable } from 'rxjs';
import { Weather } from 'src/app/core/models/ui/weather.model';
import { WeatherFacade } from '../../../../core/facades/weather-facade';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [
    CommonModule,
    IonContent,
    CurrentWeatherCardComponent,
    WeatherMetricCardComponent,
    HourlyForecastComponent
]
})
export class HomePage {

  /**
   * Observable météo actuelle
   */
  weather$: Observable<Weather>;

  constructor(
    private weatherFacade: WeatherFacade
  ) {

    // Coordonnées Dakar (temporaire)
    this.weather$ = this.weatherFacade.getCurrentWeather(14.6667, -17.3333);
  }
}
