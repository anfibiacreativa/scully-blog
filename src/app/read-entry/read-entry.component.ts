import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../commons/declarations/entry.d';

@Component({
  selector: 'app-read-entry',
  templateUrl: './read-entry.component.html',
  styleUrls: ['./read-entry.component.scss']
})
export class ReadEntryComponent implements OnInit {
  @Input() entry: Entry;
  constructor() { }

  ngOnInit(): void {
  }

}
