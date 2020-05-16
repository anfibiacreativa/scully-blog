import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntriesRoutingModule } from './entries-routing.module';
import { EntriesComponent } from './entries.component';
import { ReadEntryComponent } from '../read-entry/read-entry.component';

@NgModule({
  declarations: [
    EntriesComponent,
    ReadEntryComponent
  ],
  imports: [
    CommonModule,
    EntriesRoutingModule
  ]
})
export class EntriesModule {

}
