import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-to-link',
  templateUrl: './go-to-link.component.html',
  styleUrls: ['./go-to-link.component.scss']
})
export class GoToLinkComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    setTimeout(() => {
      window.location.href = "http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=32851";
    },1000);
  }

}
