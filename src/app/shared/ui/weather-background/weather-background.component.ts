import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-background',
  templateUrl: './weather-background.component.html',
  styleUrls: ['./weather-background.component.scss'],
  imports: [
    CommonModule
  ],
})
export class WeatherBackgroundComponent  implements OnInit {

  /**
   * Classe css provenant
   * du WeaterCodeService
   */
  @Input()
  background = 'default';

  constructor() { }

  ngOnInit() {}

}
