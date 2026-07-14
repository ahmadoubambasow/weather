import { Injectable } from '@angular/core';

import {

  LocalNotifications,

  PermissionStatus

} from '@capacitor/local-notifications';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    private readonly HEAT_KEY = 'last_heat_notification';

    constructor(

      private readonly storage: StorageService
    ) {}

  /**
   * Demande la permission.
   */
  async requestPermission(): Promise<boolean> {

    const permission: PermissionStatus =

      await LocalNotifications.requestPermissions();

    return permission.display === 'granted';

  }

  /**
   * Notification de test.
   */
  async showTestNotification(): Promise<void> {

    await LocalNotifications.schedule({

      notifications: [

        {

          id: 1,

          title: '🌤️ Weather Premium',

          body: 'Les notifications sont maintenant activées.',

          schedule: {

            at: new Date(Date.now() + 2000)

          }

        }

      ]

    });

  }

  async showHeatAlert(temperature: number): Promise<void> {

    const today = new Date().toDateString();

    const lastNotification = await this.storage.get<string>(
        this.HEAT_KEY
    );

    /**
     * Déjà envoyée aujourd'hui
     */
    if(lastNotification === today) {

        return;

    }

    await LocalNotifications.schedule({

        notifications: [

            {
                id: 2,

                title: '🌡️ Forte chaleur',

                body: `Il fait actuellement ${temperature}°. Pensez à bien vous hydrater.`

            }

        ]
    })
  }

}