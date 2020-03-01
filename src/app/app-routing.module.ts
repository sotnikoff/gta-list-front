import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdiotsIndexComponent } from './components/idiots/idiots-index/idiots-index.component';
import { IdiotsShowComponent } from './components/idiots/idiots-show/idiots-show.component';
import { IdiotsEditComponent } from './components/idiots/idiots-edit/idiots-edit.component';
import { IdiotsNewComponent } from './components/idiots/idiots-new/idiots-new.component';

const routes: Routes = [
  { path: '', component: IdiotsIndexComponent },
  { path: 'idiots', component: IdiotsIndexComponent },
  { path: 'idiots/new', component: IdiotsNewComponent },
  { path: 'idiots/:id', component: IdiotsShowComponent },
  { path: 'idiots/:id/edit', component: IdiotsEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
