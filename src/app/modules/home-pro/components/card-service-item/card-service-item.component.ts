import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-service-item',
    templateUrl: './card-service-item.component.html',
    styleUrls: ['./card-service-item.component.scss']
})
export class CardServiceItemComponent implements OnInit {
    @Input()
    item = { title: '', price: { value: '' }, oldPrice: '', listContent: [] };
    @Input()
    type = '';
    @Input()
    color = '';
    @Input()
    title = '';
    bindColor:any;

    constructor() {
    }

    ngOnInit() { 
        if (this.type == 'pro') {
            this.bindColor = '#eec478';
        } else if (this.type == 'plus') {
            this.bindColor = '#85d2c8';
        } else {
            this.bindColor = '#ba8978';
        }
    }
}
