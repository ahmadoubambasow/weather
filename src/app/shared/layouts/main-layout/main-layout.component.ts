import { Component, OnInit } from '@angular/core';
import { IonContent, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonRouterOutlet,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel
  ]
})
export class MainLayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
