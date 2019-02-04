import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agency-item',
  templateUrl: './agency-item.component.html',
  styleUrls: ['./agency-item.component.scss']
})
export class AgencyItemComponent implements OnInit {
  @Input()
  item;

  ngOnInit() {}
}
