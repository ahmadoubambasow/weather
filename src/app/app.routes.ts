import { Routes } from '@angular/router';

/**
 * Routes principales de l'application
 * 
 * Chaque écran est chargé de manière paresseuse (Lazy loading)
 * afin d'améliorer les performances.
 */

export const routes: Routes = [

  /**
   * Route par défaut
   * 
   * Lorsqu'un utilisateur ouvre l'application,
   * il est redirigé vers la page météo
   */
  {
    path: '',
    redirectTo: 'tabs/weather',
    pathMatch: 'full',
  },

  /**
   * Navigation
   */
  {
    path: 'tabs',
    loadComponent: () => import('./features/navigation/pages/tabs/tabs.page').then( m => m.TabsPage),

    children: [
      /**
       * Module weather
       */
      {
        path: 'weather',
        loadComponent: () => import('./features/weather/pages/home-page/home-page.component').then(m => m.HomePage)
      },
      
      /**
       * Prévisions
       */
      /*{
        path: 'forecast',
        loadComponent: () => import('./features/weather/pages/forecast/forecast.page').then( m => m.ForecastPage)
      }, */

      /**
       * Détails météo
       */
     /* {
        path: 'details',
        loadComponent: () => import('./app/features/weather/pages/details/details.page').then( m => m.DetailsPage)
      },*/

      /**
       * Recherche
       */
      {
        path: 'search',
        loadComponent: () => import('./features/search/pages/search/search.page').then( m => m.SearchPage)
      },

      /**
       * Favoris
       */
      {
        path: 'favorites',
        loadComponent: () => import('./features/favorites/pages/favorites/favorites.page').then( m => m.FavoritesPage)
      },

      /**
       * Paramètres
       */
      {
        path: 'settings',
        loadComponent: () => import('./features/settings/pages/settings/settings.page').then( m => m.SettingsPage)
      },

      /**
       * Profil
       */
      {
        path: 'profile',
        loadComponent: () => import('./features/profile/pages/profile/profile.page').then( m => m.ProfilePage)
      },

      {
        path: '',

        redirectTo: 'weather',

        pathMatch: 'full'
      }
    ]
  },

  
  /**
   * Route inconnue.
   * 
   * Toute URL inexistante est redirigé vers la page météo
   */
  {
    path: '**',
    redirectTo: 'tabs/weather',
  },

];
