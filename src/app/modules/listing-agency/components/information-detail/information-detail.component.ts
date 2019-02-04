import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AgencyService } from '@app/modules/listing-agency/services/agency.service';
import { isEmpty } from 'rxjs/operators';
import { isNumber } from 'util';

@Component({
    selector: 'app-information-detail',
    templateUrl: './information-detail.component.html',
    styleUrls: ['./information-detail.component.scss']
})
export class InformationDetailComponent implements OnInit {
    @Input() formValues: FormGroup;
    @Input() formComercial: FormGroup;
    @Input() formFurnished: FormGroup;
    @Input() propertyTypeList: any;
    listingType: Array<any>;
    serviceType: Array<any>;
    residentals = [];
    commercials = [];

    landtypes: Array<object> = [];
    listLandType: Array<string> = ['Industrial land', 'Commercial land', 'Residential land', 'ABC Bakery', 'Lotte'];

    ngOnInit() {
        this.listingType = AgencyService.getListingType();
        this.serviceType = AgencyService.getServiceType();
        this.listLandType.forEach((c, i) => {
            this.landtypes.push({ id: i + 1, title: c });
        });
        this.propertyTypeList.subscribe(data => {
            this.residentals = data.filter(item => item.type === 1);
            this.commercials = data.filter(item => item.type === 2);
        });
    }

    checkForm() {
        if(this.formValues.controls['listingType'].value != 2) {
            if(this.formComercial.controls['floor'].value == '' || this.formComercial.controls['floor'].value < 0 || !isNumber(this.formComercial.controls['floor'].value) ) 
            {
                this.formComercial.controls['floor'].setErrors({invalid: true});
            }
            if(this.formComercial.controls['bathroom'].value == '' || this.formComercial.controls['bathroom'].value < 0 || !isNumber(this.formComercial.controls['bathroom'].value) ) 
            {
                this.formComercial.controls['bathroom'].setErrors({invalid: true});
            }
            if(this.formComercial.controls['landArea'].value == '' || this.formComercial.controls['landArea'].value < 0 || !isNumber(this.formComercial.controls['landArea'].value) ) 
            {
                this.formComercial.controls['landArea'].setErrors({invalid: true});
            }
        } 
    }
}
