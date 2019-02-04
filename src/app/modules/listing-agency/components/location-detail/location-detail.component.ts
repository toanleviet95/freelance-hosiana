import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';

import * as fromActions from '@app/modules/listing-agency/store/actions';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-location-detail',
    templateUrl: './location-detail.component.html',
    styleUrls: ['./location-detail.component.scss'],
})
export class LocationDetailComponent implements OnInit {
    @Input() formValues: FormGroup;
    @Input() projects: any;
    @Input() cities: any;
    @Input() districts: any;
    @Input() wards: any;
    @Input() geoCode: any;
    @ViewChild('placesRef') placesRef: GooglePlaceDirective;
    @ViewChild('projectValue') inputProject: ElementRef;
    lat: Number;
    lng: Number;
    city = { name: '', id: '' };
    district = { name: '', id: '' };
    ward = { name: '', id: '' };
    citySelected = '';
    districtSelected = '';
    wardSelected = '';
    options = {};
    typingProject:boolean;
    listRenderProject:any = [];

    constructor(private store: Store<any>) { }

    ngOnInit() {
        this.projects.subscribe(data => { this.listRenderProject = data})
        
        this.lat = 10.78532;
        this.lng = 106.64833;
    }

    getDataFromGeoAPI() {
        const { value: { location: { address } } } = this.formValues;
        if (address && address.address) {
            const addressValue = address.address
                + ', Ward '
                + this.ward.name
                + ', ' + this.district.name
                + ' District, '
                + this.city.name
                + ', Vietnam';
            this.store.dispatch(new fromActions.SearchGeographyCodeByAddress(addressValue));
        }
    }

    setGeographyCode() {
        this.getDataFromGeoAPI();
        this.geoCode.subscribe(data => {
            if (data) {
                this.lat = data.displayPosition.lat;
                this.lng = data.displayPosition.lng;
                this.formValues.patchValue({ location: { address: { latitude: this.lat, longitude: this.lng } } });
            }
        });
    }

    setDisableFormControl() {
        const addressGroupControl = this.formValues['controls']['location']['controls']['address']['controls'];
        addressGroupControl['cityId'].disable();
        addressGroupControl['districtId'].disable();
        addressGroupControl['wardId'].disable();
        addressGroupControl['address'].disable();
        addressGroupControl['latitude'].disable();
        addressGroupControl['longitude'].disable();
    }

    setEnableFormControl() {
        const addressGroupControl = this.formValues['controls']['location']['controls']['address']['controls'];
        addressGroupControl['cityId'].enable();
        addressGroupControl['districtId'].enable();
        addressGroupControl['wardId'].enable();
        addressGroupControl['address'].enable();
        addressGroupControl['latitude'].enable();
        addressGroupControl['longitude'].enable();
    }

    onCityChange(cityId: string, cityName: string): void {
        this.city.id = cityId;
        this.city.name = cityName;
        this.store.dispatch(new fromActions.SearchDistrictByCity(this.city.id));
    }

    onDistrictChange(districtId: string, districtName: string): void {
        this.district.id = districtId;
        this.district.name = districtName;
        this.store.dispatch(new fromActions.SearchWardByDistrict(this.district.id));
    }

    onWardChange(wardId: string, wardName: any): void {
        this.ward.id = wardId;
        this.ward.name = wardName;
    }

    onProjectChange(projectId: string): void {
        this.projects.subscribe(data => {
            if (data) {
                const selectedProject = data.find(item => item.id === projectId);
                if (selectedProject && selectedProject.address) {
                    // this.setDisableFormControl();
                    this.inputProject.nativeElement.value = selectedProject.name;
                    this.lat = selectedProject.address.latitude || '';
                    this.lng = selectedProject.address.longitude || '';
                    this.city.id = selectedProject.address.cityId ? selectedProject.address.cityId.toString() : '';
                    this.city.name = selectedProject.address.city ? selectedProject.address.city : '';
                    this.district.id = selectedProject.address.districtId ? selectedProject.address.districtId.toString() : '';
                    this.district.name = selectedProject.address.district ? selectedProject.address.district : '';
                    this.ward.id = selectedProject.address.wardId ? selectedProject.address.wardId.toString() : '';
                    this.ward.name = selectedProject.address.ward ? selectedProject.address.ward : '';
                    const address = selectedProject.address.streetNumber && selectedProject.address.streetName ?
                        selectedProject.address.streetNumber + ' ' + selectedProject.address.streetName :
                        (selectedProject.address.streetName ? selectedProject.address.streetName : '');
                    this.formValues.patchValue({ location: { address: {
                        latitude: this.lat,
                        longitude: this.lng,
                        cityId: this.city.id,
                        districtId: this.district.id,
                        wardId: this.ward.id, address: address } } });
                    this.store.dispatch(new fromActions.SearchDistrictByCity(this.city.id));
                    this.store.dispatch(new fromActions.SearchWardByDistrict(this.district.id));
                } else {
                    this.setEnableFormControl();
                }
            }
        });
    }

    onAddressChange(address: any) {
        this.formValues.patchValue({ location: { address: { address: address.formatted_address } } });
        this.setGeographyCode();
    }
    
    nonAccentVietnamese(str) {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
        return str;
    }

    changeProject(event) {  
        this.typingProject = true;
        let keyword = event.target.value;
        console.log(keyword);
        this.projects.subscribe(data => {
            this.listRenderProject = data.filter(item => this.nonAccentVietnamese(item.name).indexOf(this.nonAccentVietnamese(keyword)) !== -1);
        });
        // this.listRenderProject.map(data => console.log(data));
    }
    focusOutProject(event) {
        this.typingProject = false;
    }
    chooseProject(id: any) {
        this.onProjectChange(id);
        this.typingProject = false;
    }
}
