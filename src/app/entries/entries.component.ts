import { Component, OnInit } from '@angular/core';
import { Entry } from '../commons/declarations/entry.d';
import { EntriesService } from '../commons/services/entries.service';
import { Router, RouterModule, ActivatedRoute, NavigationEnd } from '@angular/router'; // CLI imports router

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  providers: [EntriesService],
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
  entries: Entry[];
  currentEntry: any;
  currentRoute: string;

  constructor(
    private entriesService: EntriesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  getEntries() {
    this.entriesService.getEntries()
    .subscribe(
      entries => {
        this.entries = entries; 
        const entry = this.getCurrentEntry(this.entries, this.currentRoute);
        this.currentEntry = entry[0];
      });
  }

  getCurrentEntry(entries: Entry[], url: string) {
    return  entries.filter(entry => entry.title === url);
  }

  getCurrentRoute(): void {
    this.route.url
        .subscribe(url => {
            this.currentRoute = url[0].path;
        });
  }

  ngOnInit(): void {
    this.getEntries();
    this.getCurrentRoute();
  }
}
