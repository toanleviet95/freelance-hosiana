import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-values',
  templateUrl: './card-values.component.html',
  styleUrls: ['./card-values.component.scss']
})
export class CardValuesComponent implements OnInit {
  values = [];
  constructor() {
    this.values = [
      {
        image: 'assets/images/chart1.png',
        header: 'Build Your Notoriety',
        content:
          'With 100% listings posted by qualified Professionals and strong marketing Strategy. Your visibility and brand awareness will increase.'
      },
      {
        image: 'assets/images/chart2.png',
        header: 'Your Customers',
        content: 'Reach Vietnamese and foreign customers though our website and social conecctions around the world.'
      },
      {
        image: 'assets/images/chart3.png',
        header: 'Our Services',
        content:
          'In addtion to each package, we offer free consulting services for our members. From your logo creation to your strategic development.'
      },
      {
        image: 'assets/images/chart4.png',
        header: 'Team Management',
        content:
          'Organize your Agency as a team to boost your business! Any team member can post listing under your management with our multple agents tools.'
      }
    ];
  }

  ngOnInit() {}
}
