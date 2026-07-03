import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HomeViewModel } from '../../view-models/home-viewmodel';
import { CurrentWeatherCardComponent } from '../../components/current-weather-card/current-weather-card.component';
import { WeatherMetricCardComponent } from '../../components/weather-metric-card/weather-metric-card.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [
    CommonModule,
    IonContent,
    CurrentWeatherCardComponent,
    WeatherMetricCardComponent
  ]
})
export class HomePage {

  /**
   * Données de démonstration
   *
   */

  weather: HomeViewModel = {

    location: 'Dakar',

    temperature: 29,

    description: 'Partiellement nuageux',

    feelsLike: 31,

    humidity: 68,

    pressure: 1015,

    windSpeed: 18,

    uvIndex: 6
  }

  

}
