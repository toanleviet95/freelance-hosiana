import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-industry-card-item',
  templateUrl: './industry-card-item.component.html',
  styleUrls: ['./industry-card-item.component.scss']
})
export class IndustryCardItemComponent implements OnInit {
  @Input()
  image = '';
  @Input()
  content = '';
  @Input()
  backgroundImage = '';
  @Input()
  elementId = '';

  constructor() {}
  scroll(element) {
    document.getElementById(element).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
  }
  ngOnInit() {}
}
