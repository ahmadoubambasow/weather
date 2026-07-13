import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { addIcons } from 'ionicons';
import { chevronForwardOutline, informationCircleOutline, locationOutline, moonOutline, navigateOutline, notificationsOutline, speedometerOutline, star, starOutline, thermometerOutline, trashOutline } from 'ionicons/icons';

addIcons({

  'trash-outline': trashOutline,
  'locate-outline': locationOutline,
  'thermometer-outline': thermometerOutline,
  'chevron-forward-outline': chevronForwardOutline,
  'moon-outline': moonOutline,
  'notifications-outline': notificationsOutline,
  'information-circle-outline': informationCircleOutline,
  'speedometer-outline': speedometerOutline,
  'navigate-outline': navigateOutline,

  star,

  'star-outline': starOutline,

  'location-outline': locationOutline

});
bootstrapApplication(AppComponent, appConfig);