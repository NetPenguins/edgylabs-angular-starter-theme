import {Injectable} from '@angular/core';

/**
 * @description Local Storage Service for storing session data
 * @module services/local-storage.service
 * @version 1.0.0
 * @namespace LocalStorageService
 */
@Injectable()
export class StorageService {

  get(key: string): any {
    return localStorage ? localStorage.getItem(key) : null;
  }

  set(key: string, value: any): void {
    if (localStorage) {
      localStorage.setItem(key, value);
    }
  }

}
