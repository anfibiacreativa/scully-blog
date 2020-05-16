import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entry } from '../declarations/entry.d';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  constructor(
    private http: HttpClient
  ) { }

  getConfig(path: string) {
    return this.http.get(`${path}`, { responseType: 'text' }).subscribe(response => {
      this.processConfig(response);
    });
  }

  processConfig(configuration: string): void {
    const pairs: string[] = configuration.split('\n');
    const config = {};
    pairs.forEach((pair: string) => {
      const delimiter = pair.indexOf(':');
      const key = pair.substr(0, delimiter - 1);
      const value = pair.substr(delimiter + 1);
      config[key] = value;
    });
  }
}
