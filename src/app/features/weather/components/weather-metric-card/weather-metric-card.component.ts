import { Component, Input, OnInit } from '@angular/core';
import { AppCardComponent } from "../../../../shared/ui/app-card/app-card.component";
import { IonIcon } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

/**
 * ============================================================
 * WeatherMetricCardComponent
 * ============================================================
 *
 * Carte générique affichant une métrique météo.
 */

@Component({
  selector: 'app-weather-metric-card',
  templateUrl: './weather-metric-card.component.html',
  styleUrls: ['./weather-metric-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonIcon, AppCardComponent],
})
export class WeatherMetricCardComponent  implements OnInit {

  @Input() icon = 'water-outline';

  @Input() title = '';

  @Input() value: string | number = '';

  @Input() unit = '';

  constructor() { }

  ngOnInit() {}

}
