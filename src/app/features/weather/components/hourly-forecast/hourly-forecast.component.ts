import { Component, Input, OnInit } from '@angular/core';
import { HourlyForecast } from '../../../../core/models/ui/hourly-forecast.model';
import { AppCardComponent } from "src/app/shared/ui/app-card/app-card.component";
import { IonIcon } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

/**
 * ============================================================
 * HourlyForecastCardComponent
 * ============================================================
 *
 * Affiche les prévisions météo heure par heure.
 *
 * Exemple :
 *
 * 10h ☀️ 31°
 * 11h 🌤 32°
 *
 * ============================================================
 */

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonIcon, 
    AppCardComponent
  ],
})
export class HourlyForecastComponent  implements OnInit {

  /**
   * Liste des prévisions horaires
   */
  @Input()
  forecasts: HourlyForecast[] = [];

  constructor() { }

  ngOnInit() {}

}
