import { Component, Input, OnInit } from '@angular/core';
import { HourlyForecast } from '../../../../core/models/ui/hourly-forecast.model';
import { AppCardComponent } from "src/app/shared/ui/app-card/app-card.component";

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.scss'],
  standalone: true,
  imports: [AppCardComponent],
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
