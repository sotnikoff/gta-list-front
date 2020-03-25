import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IdiotsIndexComponent } from './components/idiots/idiots-index/idiots-index.component';
import { IdiotsFormComponent } from './components/idiots/idiots-form/idiots-form.component';
import { IdiotsShowComponent } from './components/idiots/idiots-show/idiots-show.component';
import { IdiotsEditComponent } from './components/idiots/idiots-edit/idiots-edit.component';
import { IdiotsNewComponent } from './components/idiots/idiots-new/idiots-new.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { AuthInterceptor } from './utility/auth.interceptor';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { LogOutComponent } from './components/auth/log-out/log-out.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TokensIndexComponent } from './components/tokens/tokens-index/tokens-index.component';
import { ClipboardModule } from 'ngx-clipboard';
import { UsersIndexComponent } from './components/users/users-index/users-index.component';
import { UsersInviteComponent } from './components/users/users-invite/users-invite.component';
import { UsersProceedComponent } from './components/users/users-proceed/users-proceed.component';
import { MessagesIndexComponent } from './components/messages/messages-index/messages-index.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    IdiotsIndexComponent,
    IdiotsFormComponent,
    IdiotsShowComponent,
    IdiotsEditComponent,
    IdiotsNewComponent,
    SignInComponent,
    HomeComponent,
    TopNavbarComponent,
    LogOutComponent,
    TokensIndexComponent,
    UsersIndexComponent,
    UsersInviteComponent,
    UsersProceedComponent,
    MessagesIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ClipboardModule,
    MDBBootstrapModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
