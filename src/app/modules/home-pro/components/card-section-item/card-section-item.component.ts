import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-section-item',
  templateUrl: './card-section-item.component.html',
  styleUrls: ['./card-section-item.component.scss']
})
export class CardSectionItemComponent implements OnInit {
  @Input()
  item = { header: '', image: '', content: '' };
  @Input()
  index;
  @Input()
  title;

  constructor() {}

  ngOnInit() {}
}
