import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from '@app/shared';
import { CoreRoutingModule } from './core-routing.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '@core/store/auth/effects';
import { SettingEffects } from '@core/store/settings/effects';
import { reducers /*, metaReducers*/ } from './store/app.states';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { environment } from '@env/environment';

import { ClientLayoutComponent } from '@core/layouts/client-layout/client-layout.component';
import { ClientFooterComponent } from '@core/layouts/client-footer/client-footer.component';
import { ClientHeaderComponent } from '@core/layouts/client-header/client-header.component';
import { ClientNavbarComponent } from '@core/layouts/client-navbar/client-navbar.component';
import { ClientLoadingComponent } from '@core/layouts/client-loading/client-loading.component';

import { AppInitService } from './services/app-init.service';
const getDeviceId = (appInitService: AppInitService) => {
  return () => {
    return appInitService.getDeviceId();
  };
};

import { Ng2Webstorage } from 'ngx-webstorage';
import { RequestInterceptor, ErrorInterceptor } from './services/intercept.service';
import { GoToLinkComponent } from './layouts/go-to-link/go-to-link.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    Ng2Webstorage.forRoot({ prefix: 'HOS' }),
    SharedModule,
    CoreRoutingModule,
    StoreRouterConnectingModule.forRoot(), // Connects RouterModule with StoreModule
    StoreModule.forRoot(reducers /*, { metaReducers } */),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AuthEffects, SettingEffects]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: getDeviceId, deps: [AppInitService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    // {
    //     provide: APP_INITIALIZER,
    //     useFactory: get_settings,
    //     deps: [LoadService, NgxPermissionsService],
    //     multi: true
    // }
  ],
  declarations: [
    ClientLayoutComponent,
    ClientFooterComponent,
    ClientHeaderComponent,
    ClientNavbarComponent,
    ClientLoadingComponent,
    GoToLinkComponent
  ]
})
export class CoreModule {}
