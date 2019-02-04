import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import component 
import { PlayListComponent } from './pages/play-list.component';

const routes: Routes = [
	{
		path: '',
		component: PlayListComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
