import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
    selector: 'app-facilities-detail',
    templateUrl: './facilities-detail.component.html',
    styleUrls: ['./facilities-detail.component.scss']
})
export class FacilitiesDetailComponent implements OnInit {
    @Input() formValues: FormGroup;
    @Input() facilityList;

    ngOnInit() {
        this.facilityList.subscribe(data => {
        })
    }

    handleCheck(event): void {
        const listChecked: number[] = [];
        if (event.target.checked) {
            listChecked.push(event.target.value * 1);
        } else {
            const index = listChecked.indexOf(event.target.value * 1);
            if (index !== -1) {
                listChecked.splice(index, 1);
            }
        }
        this.formValues.controls['facilities'].setValue(listChecked);
    }

}
