import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonIcon,
  IonToggle
} from '@ionic/angular/standalone';

import { SettingsService } from 'src/app/core/services/settings.service';
import { AppSettings } from 'src/app/core/models/ui/settings.model';
import { NotificationService } from 'src/app/core/services/notification.service';


@Component({

  selector:'app-settings',

  standalone:true,

  templateUrl:'./settings.page.html',

  styleUrls:['./settings.page.scss'],

  imports:[

    CommonModule,

    FormsModule,

    IonContent,

    IonIcon,

    IonToggle

  ]

})
export class SettingsPage {


  settings!: AppSettings;

  private readonly settingsService =
    inject(SettingsService);



  settings$ =
    this.settingsService.settings$;

  private readonly notificationService = inject(NotificationService);


  constructor() {

    this.settingsService.settings$.subscribe(value => {

      this.settings = value;
    });
  }


  /**
   * Mise à jour des paramètres
   */
  async update(
    value: Partial<AppSettings>
  ): Promise<void>{


    await this.settingsService.update(
      value
    );


  }

  updateTemperature(value:
    'celsius'|'fahrenheit'):void{


    this.settingsService.update({

    temperatureUnit:value

    });


  }


  updateWind(value:
    'kmh'|'mph'):void{


    this.settingsService.update({

    windUnit:value

    });


  }


  updateAutoLocation(value:boolean):void{


    this.settingsService.update({

    autoLocation:value

    });


  }

  updateWindUnit(
    value:'kmh'|'mph'
  ):void {

    this.settingsService.update({

      windUnit:value

    });

  }


  async updateNotification(enabled: boolean): Promise<void> {

    if (enabled) {

      const granted = await this.notificationService.requestPermission();

      if (!granted) {

        await this.settingsService.update({

          notifications: false
        });

        return;
      }

      await this.notificationService.showTestNotification();
    }

    await this.settingsService.update({

      notifications: enabled
    });
  }

}