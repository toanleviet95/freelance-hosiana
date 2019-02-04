import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-listing-promote',
  templateUrl: './add-listing-promote.component.html'
})
export class AddListingPromoteComponent implements OnInit {
  @Input() formValues: FormGroup;
  @Input() promotions: any;

  ngOnInit() {
    window.scroll(0, 0);
  }
}
