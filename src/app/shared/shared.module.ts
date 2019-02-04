import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from './../../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReCaptchaDirective } from './re-captcha/re-captcha.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgxPermissionsModule } from 'ngx-permissions';
import { TranslateModule } from '@ngx-translate/core';
import { NgxCaptchaModule } from 'ngx-captcha';

import { FormLoginComponent } from './form-login/form-login.component';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { UploadComponent } from './upload/upload.component';
import { SidebarComponent } from '@app/shared/sidebar/sidebar.component';
import { AgentAcceptComponent } from '@app/shared/agent-accept/agent-accept.component';
import { ToggleSwitchComponent } from '@app/shared/toggle-switch/toggle-switch.component';
import { SpellCurrencyPipe } from './spell-currency.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    // NgxPermissionsModule.forChild({ permissionsIsolate: true, rolesIsolate: true }),
    TranslateModule.forChild(),
    NgxCaptchaModule.forRoot(environment.captchaApikey) ,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    // NgxPermissionsModule,
    TranslateModule,
    FormLoginComponent,
    ShowErrorsComponent,
    UploadComponent,
    SidebarComponent,
    AgentAcceptComponent,
    ToggleSwitchComponent,
    SpellCurrencyPipe
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    FormLoginComponent,
    ShowErrorsComponent,
    UploadComponent,
    SidebarComponent,
    AgentAcceptComponent,
    ToggleSwitchComponent,
    ReCaptchaDirective,
    SpellCurrencyPipe
  ],
  entryComponents: [AgentAcceptComponent]
})
export class SharedModule {}
