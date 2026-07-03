import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

/**
 * ------------------------------------------------------------------
 * AppCardComponent
 * ------------------------------------------------------------------
 *
 * Carte réutilisable dans toute l'application.
 *
 * Son contenu est projeté grâce à <ng-content>.
 *
 * Exemple :
 *
 * <app-card>
 *   Mon contenu
 * </app-card>
 *
 * ------------------------------------------------------------------
 */

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class AppCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
