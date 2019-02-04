import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
    selector: 'app-swap-listing',
    templateUrl: './swap-listing.component.html',
    styleUrls: ['./swap-listing.component.scss']
})
export class SwapListingComponent implements OnInit {
    @Input()
    formValues: FormGroup;

    firstCheck = true;
    listExpecting: Array<object>;

    ngOnInit() {
        this.listExpecting = [
            {
                id: 1,
                title: "Swimming pool"
            },
            {
                id: 2,
                title: "Fitness club"
            },
            {
                id: 3,
                title: "Restaurant"
            },
            {
                id: 4,
                title: "Tennis club"
            },
            {
                id: 5,
                title: "Garden"
            },
            {
                id: 6,
                title: "Kids playground"
            },
            {
                id: 7,
                title: "Parking"
            },
            {
                id: 8,
                title: "Pet area"
            },
            {
                id: 9,
                title: "Shopping mall"
            },
            {
                id: 10,
                title: "24h hours security"
            },
            {
                id: 11,
                title: "Golf course"
            }
        ];
    }

}
