import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdiotsIndexComponent } from './components/idiots/idiots-index/idiots-index.component';

const routes: Routes = [
  { path: '', component: IdiotsIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
