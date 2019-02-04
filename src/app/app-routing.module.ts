import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //   { path: '', component: LayoutsComponent, data: { title: 'Home' } },
  //   { path: '**', component: LayoutsComponent, data: { title: 'Home' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes /* , { useHash: true } */)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
