import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { addIcons } from 'ionicons';
import { locationOutline, star, starOutline, trashOutline } from 'ionicons/icons';

addIcons({

  'trash-outline': trashOutline,

  star,

  'star-outline': starOutline,

  'location-outline': locationOutline

});
bootstrapApplication(AppComponent, appConfig);