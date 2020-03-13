import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdiotsIndexComponent } from './components/idiots/idiots-index/idiots-index.component';
import { IdiotsShowComponent } from './components/idiots/idiots-show/idiots-show.component';
import { IdiotsEditComponent } from './components/idiots/idiots-edit/idiots-edit.component';
import { IdiotsNewComponent } from './components/idiots/idiots-new/idiots-new.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { NotAuthenticatedGuard } from './utility/not-authenticated.guard';
import { AuthenticatedGuard } from './utility/authenticated.guard';
import { HomeComponent } from './components/home/home.component';
import { LogOutComponent } from './components/auth/log-out/log-out.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthenticatedGuard] },
  {
    path: 'idiots',
    canActivateChild: [AuthenticatedGuard],
    children: [
      { path: '', component: IdiotsIndexComponent },
      { path: 'new', component: IdiotsNewComponent },
      { path: ':id', component: IdiotsShowComponent },
      { path: ':id/edit', component: IdiotsEditComponent }
    ]
  },
  { path: 'sign_in', component: SignInComponent, canActivate: [NotAuthenticatedGuard] },
  { path: 'sign_out', component: LogOutComponent, canActivate: [AuthenticatedGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
