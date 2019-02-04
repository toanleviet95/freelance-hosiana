import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
    selector: 'app-property-detail',
    templateUrl: './property-detail.component.html',
    styleUrls: ['./property-detail.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PropertyDetailComponent implements OnInit {
    @Input()
    formValues: FormGroup;
    multi = true;
    isDoneProgress = false;

    ngOnInit() {
    }

    handleUploadSuccess(photos) {
        this.isDoneProgress = true;
        this.formValues.value.medias.photos.push(...photos);
    }

}
