import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdiotsIndexComponent } from './components/idiots/idiots-index/idiots-index.component';
import { IdiotsShowComponent } from './components/idiots/idiots-show/idiots-show.component';

const routes: Routes = [
  { path: '', component: IdiotsIndexComponent },
  { path: 'idiots', component: IdiotsIndexComponent },
  { path: 'idiots/:id', component: IdiotsShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
