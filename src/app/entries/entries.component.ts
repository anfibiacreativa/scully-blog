import { Component, OnInit } from '@angular/core';
import { Entry } from '../commons/declarations/entry.d';
import { EntriesService } from '../commons/services/entries.service';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router'; // CLI imports router
import { Route } from '@angular/compiler/src/core';

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
    private route: ActivatedRoute
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

  ngOnInit(): void {
    this.getEntries();
    this.route.url
        .subscribe(url => {
            this.currentRoute = url[0].path;
        });
  }
}
