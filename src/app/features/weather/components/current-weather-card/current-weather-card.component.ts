import { Component, Input, OnInit } from '@angular/core';
import { AppCardComponent } from "../../../../shared/ui/app-card/app-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-weather-card',
  templateUrl: './current-weather-card.component.html',
  styleUrls: ['./current-weather-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    AppCardComponent
  ],
})
export class CurrentWeatherCardComponent  implements OnInit {

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
