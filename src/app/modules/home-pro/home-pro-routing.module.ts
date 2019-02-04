import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeProComponent } from './components/home-pro.component';
import { SignupComponent } from '@app/modules/home-pro/components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeProComponent
  },
  {
    path: 'become-member',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeProRoutingModule {}
