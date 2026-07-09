import { Component, Input, OnInit } from '@angular/core';
import { DailyForecast } from 'src/app/core/models/ui/daily-forecast.model';
import { IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss'],
  imports: [IonIcon],
})
export class DailyForecastComponent  implements OnInit {

  /**
   * Prévisions
   */
  @Input()
  forecasts: DailyForecast[] = [];

  constructor() { }

  ngOnInit() {}

}
