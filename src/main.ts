import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { addIcons } from 'ionicons';
import { star, starOutline } from 'ionicons/icons';

addIcons({

  star,

  'star-outline': starOutline

});

bootstrapApplication(AppComponent, appConfig);