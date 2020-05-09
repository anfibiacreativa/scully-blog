import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  entries$: Observable<ScullyRoute[]>;

  constructor(
    private entries: ScullyRoutesService
  ) {}

  ngOnInit() {
    this.entries$ = this.entries.available$;
  }
}
