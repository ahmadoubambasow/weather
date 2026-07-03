/**
 * ============================================================
 * ApiService
 * ============================================================
 *
 * Service centralisé pour toutes les requêtes HTTP.
 *
 * Rôle :
 * - éviter de dupliquer HttpClient dans toute l'app
 * - centraliser gestion des erreurs
 * - préparer cache / logs / interceptors futurs
 */

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  constructor(
    private http: HttpClient
  ) { }

  /**
   * GET générique
   * 
   * @param url endpoint complet
   * @params query params optionnels
   */
  get<T>(url: string, params?: HttpParams): Observable<T> {

    return this.http.get<T>(url, { params }).pipe(

      catchError((error) => {

        console.error('API GET Error:', error);

        return throwError(() =>
          new error('Erreur lors de la récupération des données')
        );
      })
    );
  }

  /**
   * POST générique
   */
  post<T>(url: string, body: any): Observable<T> {

    return this.http.post<T>(url, body).pipe(

      catchError((error) => {

        console.error('API POST Error:', error);

        return throwError(() =>
          new Error('Erreur lors de l’envoi des données')
        );

      })

    );
  }


  /**
   * PUT générique
   */
  put<T>(url: string, body: any): Observable<T> {

    return this.http.put<T>(url, body).pipe(

      catchError((error) => {

        console.error('API PUT Error:', error);

        return throwError(() =>
          new Error('Erreur lors de la mise à jour')
        );

      })

    );
  }

  /**
   * DELETE générique
   */
  delete<T>(url: string): Observable<T> {

    return this.http.delete<T>(url).pipe(

      catchError((error) => {

        console.error('API DELETE Error:', error);

        return throwError(() =>
          new Error('Erreur lors de la suppression')
        );

      })

    );
  }
}
