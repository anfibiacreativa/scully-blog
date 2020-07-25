import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title: string;
  entries$: Observable<any> = this.scully.available$;
  defaultTitle = 'New Entry';
  defaultSummary = 'New Description';

  constructor(
    private scully: ScullyRoutesService
  ) {}

  ngOnInit() {
    this.entries$.subscribe(entries => {
      console.log(entries);
    });
  }
}
