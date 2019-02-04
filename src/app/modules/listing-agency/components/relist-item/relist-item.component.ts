import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-relist-item',
  templateUrl: './relist-item.component.html',
  styleUrls: ['./relist-item.component.scss']
})
export class RelistItemComponent implements OnInit {
  @Input()
  item: any;

  constructor() {}

  ngOnInit() {}
}
