import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-sections',
  templateUrl: './card-sections.component.html',
  styleUrls: ['./card-sections.component.scss']
})
export class CardSectionsComponent implements OnInit {
  agents = [];
  @Input()
  elementId = '';
  constructor() {
    this.agents = [
      {
        header: 'Reach real-estate agency',
        content: 'Connect with our professional agencies and get offers from them',
        image: 'assets/images/broker1.png'
      },
      {
        header: 'Get offers',
        image: 'assets/images/broker2.png',
        content: 'You receive contacts based on your location, reviews and experience.'
      },
      {
        header: 'We’re here to help',
        image: 'assets/images/broker3.png',
        content: 'Our team is always here to help you improve conversions and grow your purchasep is pipeline'
      }
    ];
  }

  ngOnInit() {}
}
