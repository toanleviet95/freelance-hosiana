import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-duration-promote',
    templateUrl: './duration-promote.component.html',
    styleUrls: ['./duration-promote.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DurationPromoteComponent implements OnInit {
    @Input()
    formValues: FormGroup;

    ngOnInit() {

    }
}
