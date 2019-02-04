import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-add-listing-detail',
    templateUrl: './add-listing-detail.component.html',
    styleUrls: ['./add-listing-detail.scss']
})
export class AddListingDetailComponent implements OnInit {
    @Input() formValues: FormGroup;
    @Input() formComercial: FormGroup;
    @Input() formFurnished: FormGroup;
    @Input() propertyTypeList: any;
    @Input() facilityList: any;
    @Input() exchangeRates: any;
    @Input() projects: any;
    @Input() cities: any;
    @Input() districts: any;
    @Input() wards: any;
    @Input() geoCode: any;
    @Input() agencyStaffs: any;

    ngOnInit() {
        window.scroll(0, 0);
    }
}
