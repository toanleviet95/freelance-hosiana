import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserTransferStateModule } from '@angular/platform-browser';

import { CoreModule } from '@app/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'hosiana-ng-version' }),
    // BrowserTransferStateModule,
    CoreModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
