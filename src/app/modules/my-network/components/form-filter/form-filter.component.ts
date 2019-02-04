import { Component } from '@angular/core';

@Component({
	selector: 'network-form-filter',
	templateUrl: './form-filter.component.html',
	styleUrls: ['./form-filter.component.scss']
})
export class FormFilterComponent {
  	listAgents = ['Option 1', 'Option 2', 'Option 3'];
  	listSorts = [
		{
			key: 'DESC',
			title: 'Option 1'
		},
		{
			key: 'ASC',
			title: 'Option 2'
		},
		{
			key: 'GQB',
			title: 'Option 3'
		}
  	];
  	constructor() {}
}
