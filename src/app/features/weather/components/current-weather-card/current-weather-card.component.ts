import { Component, Input, OnInit } from '@angular/core';
import { AppCardComponent } from "../../../../shared/ui/app-card/app-card.component";
import { CommonModule } from '@angular/common';
import { IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-current-weather-card',
  templateUrl: './current-weather-card.component.html',
  styleUrls: ['./current-weather-card.component.scss'],
  standalone: true,
  imports: [IonIcon, 
    CommonModule,
    AppCardComponent
  ],
})
export class CurrentWeatherCardComponent  implements OnInit {

  @Input()
  icon = '☀️';

  @Input()
  location = '';

  @Input()
  temperature = 0;

  @Input()
  description = '';

  @Input()
  feelsLike = 0;

  constructor() { }

  ngOnInit() {}

}
