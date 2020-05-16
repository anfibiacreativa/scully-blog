import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Entry } from '../declarations/entry.d';
import { API_URL } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class EntriesService {
  private url: string = API_URL;

  constructor(
    private http: HttpClient
  ) { }

  getEntries(): Observable<Entry[]> {
      return this.http.get<Entry[]>(this.url);
  }
}
