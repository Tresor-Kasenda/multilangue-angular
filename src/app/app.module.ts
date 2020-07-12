import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CardComponent } from './component/card/card.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      DetailComponent,
      CardComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      TranslateModule.forRoot({
        defaultLanguage: 'fr',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
