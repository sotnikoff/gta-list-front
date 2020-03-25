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
import { TokensIndexComponent } from './components/tokens/tokens-index/tokens-index.component';
import { UsersIndexComponent } from './components/users/users-index/users-index.component';
import { UsersInviteComponent } from './components/users/users-invite/users-invite.component';
import { UsersProceedComponent } from './components/users/users-proceed/users-proceed.component';
import { MessagesIndexComponent } from './components/messages/messages-index/messages-index.component';

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
  { path: 'sign_out', component: LogOutComponent, canActivate: [AuthenticatedGuard] },
  { path: 'tokens', component: TokensIndexComponent, canActivate: [AuthenticatedGuard] },
  { path: 'users', component: UsersIndexComponent, canActivate: [AuthenticatedGuard] },
  { path: 'user_invite', component: UsersInviteComponent, canActivate: [AuthenticatedGuard] },
  { path: 'user_activate', component: UsersProceedComponent, canActivate: [NotAuthenticatedGuard] },
  { path: 'messages', component: MessagesIndexComponent, canActivate: [AuthenticatedGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
