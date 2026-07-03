/**
 * ============================================================
 * Réponse générique d'une API
 * ============================================================
 */

export interface ApiResponse<T> {

  /**
   * Données retournées.
   */
  data: T;

  /**
   * Indique si l'appel est valide.
   */
  success: boolean;

  /**
   * Message éventuel.
   */
  message?: string;

}