import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
 
import { AppComponent } from './app.component';
import { LoggerInterceptor } from './logger.interceptor';
import { StartupService } from './startup.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide : APP_INITIALIZER,
      multi : true,
      deps : [StartupService],
      useFactory : (startupService : StartupService) => () => startupService.startmeup()
    },
    { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
