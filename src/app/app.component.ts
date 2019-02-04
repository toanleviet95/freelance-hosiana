import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import GLOBAL from '@config/global';
// import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    // private permissionsService: NgxPermissionsService,
    // private rolesService: NgxRolesService,
    private translate: TranslateService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  ngOnInit(): void {
    // this.loadExternalJsScript();
    // this.translate.setDefaultLang('en');
    // this.translate.setDefaultLang('vi');
    // this.rolesService
    //   .addRoles({
    //     VISITORS: [],
    //     USER: ['canReadInvoices'],
    //     ADMIN: ['canReadInvoices', 'canEditInvoices', 'canUploadImages'],
    //     'GUEST': () => {
    //         return this.sessionService.checkSessions().toPromise();
    //     }
    //   });
    // let roles = this.rolesService.getRoles();
  }

  // loadExternalJsScript() {
  //   const script = document.createElement('script');
  //   script.src = `${GLOBAL.apiGoogle}/js?key=${GLOBAL.apiGoogleKeyApp}&libraries=places&language=en`;
  //   script.type = 'text/javascript';
  //   script.async = true;
  //   script.charset = 'utf-8';
  //   document.getElementsByTagName('head')[0].appendChild(script);
  // }
}
