import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IdiotsIndexComponent } from './components/idiots/idiots-index/idiots-index.component';
import { IdiotShowComponent } from './components/idiots/idiot-show/idiot-show.component';
import { IdiotNewComponent } from './components/idiots/idiot-new/idiot-new.component';
import { IdiotEditComponent } from './components/idiots/idiot-edit/idiot-edit.component';
import { IdiotFormComponent } from './components/idiots/idiot-form/idiot-form.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    IdiotsIndexComponent,
    IdiotShowComponent,
    IdiotNewComponent,
    IdiotEditComponent,
    IdiotFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
