import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntriesComponent } from './entries.component';

const routes: Routes = [
  {
    path: ':title',
    component: EntriesComponent,
  },
  {
    path: '**',
    component: EntriesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntriesRoutingModule { }
