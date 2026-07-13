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



  private readonly settingsService =
    inject(SettingsService);



  settings$ =
    this.settingsService.settings$;



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



}