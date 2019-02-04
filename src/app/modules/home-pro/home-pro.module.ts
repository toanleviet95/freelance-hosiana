import { NgModule } from '@angular/core';
import { HomeProRoutingModule } from './home-pro-routing.module';
import { SharedModule } from '@app/shared';
import { NgxCaptchaModule } from 'ngx-captcha';
import { environment } from './../../../environments/environment';

import { HomeProComponent } from './components/home-pro.component';
import { TopMaskComponent } from './components/top-mask/top-mask.component';
import { IndustryCardsComponent } from './components/industry-cards/industry-cards.component';
import { IndustryCardItemComponent } from './components/industry-card-item/industry-card-item.component';
import { CardSectionsComponent } from './components/card-sections/card-sections.component';
import { CardSectionItemComponent } from './components/card-section-item/card-section-item.component';
import { CardDifferencesComponent } from './components/card-differences/card-differences.component';
import { CardServicesComponent } from './components/card-services/card-services.component';
import { CardServiceItemComponent } from './components/card-service-item/card-service-item.component';
import { CardValuesComponent } from './components/card-values/card-values.component';
import { CardValueItemComponent } from './components/card-value-item/card-value-item.component';
import { CardClientsComponent } from './components/card-clients/card-clients.component';
import { CardClientItemComponent } from './components/card-client-item/card-client-item.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  imports: [
    SharedModule,
    HomeProRoutingModule,
    NgxCaptchaModule.forRoot(environment.captchaApikey) ,
  ],
  declarations: [
    HomeProComponent,
    TopMaskComponent,
    IndustryCardsComponent,
    IndustryCardItemComponent,
    CardSectionsComponent,
    CardSectionItemComponent,
    CardDifferencesComponent,
    CardServicesComponent,
    CardServiceItemComponent,
    CardValuesComponent,
    CardValueItemComponent,
    CardClientsComponent,
    CardClientItemComponent,
    SignupComponent
  ]
})
export class HomeProModule {}
