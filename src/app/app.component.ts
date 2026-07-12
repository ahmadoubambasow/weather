import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  partlySunnyOutline,
  searchOutline,
  heartOutline,
  settingsOutline,
} from 'ionicons/icons';
import { SelectedLocationService } from './core/services/selected-location.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

  private readonly selectedLocation =
   inject(SelectedLocationService);

  constructor() {

    addIcons({
      partlySunnyOutline,
      searchOutline,
      heartOutline,
      settingsOutline
    });

    this.selectedLocation.restore();
  }
}
