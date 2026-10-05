import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { FormsModule }   from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HTTPInterceptorService } from './services/http-interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPInterceptorService,
      multi:true,
    }
  ],
  bootstrap: [AppModule]
})
export class AppModule { }
