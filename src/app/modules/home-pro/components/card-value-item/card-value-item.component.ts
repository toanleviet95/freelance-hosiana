import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-value-item',
  templateUrl: './card-value-item.component.html',
  styleUrls: ['./card-value-item.component.scss']
})
export class CardValueItemComponent implements OnInit {
  @Input()
  item = { header: '', image: '', content: '' };
  @Input()
  index;

  constructor() {}

  ngOnInit() {}
}
