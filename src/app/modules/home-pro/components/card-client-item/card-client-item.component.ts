import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-client-item',
  templateUrl: './card-client-item.component.html',
  styleUrls: ['./card-client-item.component.scss']
})
export class CardClientItemComponent implements OnInit {
  @Input()
  item = { header: '', image: '', content: '' };
  @Input()
  type = '';

  constructor() {}

  ngOnInit() {}
}
