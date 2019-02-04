import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

import {
    Agency,
    Category,
    Facility,
    ExchangeRate,
    Item,
    City,
    District,
    Ward,
    GeoCode,
    PromotionList,
    AgencyStaff
} from '../../models/agency';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as fromActions from '../../store/actions';
import * as fromCategoryReducers from '../../store/category.reducers';
import * as fromFacilityReducers from '../../store/facility.reducers';
import * as fromExchangeRateReducers from '../../store/exchange-rate.reducers';
import * as fromProjectReducers from '../../store/project.reducers';
import * as fromCityReducers from '../../store/city.reducers';
import * as fromDistrictReducers from '../../store/district.reducers';
import * as fromWardReducers from '../../store/ward.reducers';
import * as fromGeoCodeReducers from '../../store/geography-code.reducers';
import * as fromPromotionReducers from '../../store/promotion-list.reducers';
import * as fromAgencyStaffReducers from '../../store/agency-staff.reducers';

@Component({
    selector: 'app-add-listing',
    templateUrl: './add-listing.component.html',
    styleUrls: ['./add-listing.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AddListingComponent implements OnInit, OnDestroy {
    step: String;
    formValues: FormGroup;
    formComercial: FormGroup;
    formFurnished: FormGroup;
    submitValues: Agency;

    categories: Observable<Category[]>;
    facilities: Observable<Facility[]>;
    exchangeRates: Observable<ExchangeRate>;
    projects: Observable<Item[]>;
    cities: Observable<City[]>;
    districts: Observable<District[]>;
    wards: Observable<Ward[]>;
    geoCode: Observable<GeoCode>;
    promotions: Observable<PromotionList[]>;
    agencyStaffs: Observable<AgencyStaff[]>;
    modal: any;
    typePopup = '';
    allowNextTab = false;
    confirmMessage = '';
    showSuccessAddListing = false;
    progressAddListing = false;

    constructor(
        private formBuilder: FormBuilder,
        private store: Store<any>,
        private modalService: NgbModal,
        private translate: TranslateService,
        private router: Router
    ) { }

    ngOnInit() {
        this.store.dispatch(new fromActions.LoadAllCategories());
        this.store.dispatch(new fromActions.LoadAllFacilities());
        this.store.dispatch(new fromActions.LoadExchangeRate());
        this.store.dispatch(new fromActions.LoadProjects());
        this.store.dispatch(new fromActions.LoadCities());
        this.store.dispatch(new fromActions.LoadPromotions());
        this.store.dispatch(new fromActions.LoadAgencyStaffs());

        this.categories = this.store.select(fromCategoryReducers.selectAll);
        this.facilities = this.store.select(fromFacilityReducers.selectAll);
        this.exchangeRates = this.store.select(fromExchangeRateReducers.selectAll);
        this.projects = this.store.select(fromProjectReducers.selectAll);
        this.cities = this.store.select(fromCityReducers.selectAll);
        this.districts = this.store.select(fromDistrictReducers.selectAll);
        this.wards = this.store.select(fromWardReducers.selectAll);
        this.geoCode = this.store.select(fromGeoCodeReducers.selectAll);
        this.promotions = this.store.select(fromPromotionReducers.selectAll);
        this.agencyStaffs = this.store.select(fromAgencyStaffReducers.selectAll);

        this.step = 'tab-details';
        this.initFormValues();
        this.initFormComercial();
        this.initFormFurnised();
    }

    handleChangeTab(e: NgbTabChangeEvent): void {
        this.step = e.nextId;
    }

    handleGoToStep(e: Event, tabSet: any, tabName: string): void {
        e.preventDefault();
        this.step = tabName;
        tabSet.select(tabName);
    }

    handlePublish(content: any): void {
        const convertSubmitValues = this.convertToSubmitValues();
        this.submitValues = Object.assign({}, this.submitValues, convertSubmitValues);
        this.store.dispatch(new fromActions.Create({ agency: this.submitValues }));
        this.translate.get('add_edit_listing.charge_listing',
        { price: this.formValues['controls']['promotions']['controls']['publishFee'].value
        || '', numDay: this.submitValues.promotions.numberDays || 0 }).subscribe(value => {
            this.confirmMessage = value;
        });
        this.showPopUp(content, 'confirm');
    }

    showPopUp(content: any, type: string) {
        this.progressAddListing = false;
        this.typePopup = type;
        this.modal = this.modalService.open(content, { size: 'lg', backdropClass: 'modalEdit' });
    }

    handleCancel(content: any): void {
        this.showPopUp(content, 'cancel');
    }

    handleConfirm(): void {
        this.progressAddListing = true;
        this.store.dispatch(new fromActions.Create({agency: this.submitValues}));
        this.showSuccessAddListing = true;
        this.handleCloseModal();
    }

    handleBackToLisitng(): void {
        this.router.navigate(['/']);
    }


    handleSaveAsDraft(e: Event): void {
        e.preventDefault();
    }

    handlePromoteListing(e: Event): void {
        e.preventDefault();
    }

    handleShareListing(e: Event): void {
        e.preventDefault();
    }

    initFormComercial(): void {
        this.formComercial = this.formBuilder.group({
            floor: ['', [Validators.pattern('^[0-9]*$')]],
            bathroom: ['', [Validators.pattern('^[0-9]*$')]],
            bedroom: ['', [Validators.pattern('^[0-9]*$')]],
            floorArea: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
            landArea: ['', [Validators.pattern('^[0-9]*$')]],
            landType: [[]]
        });
    }

    initFormFurnised(): void {
        this.formFurnished = this.formBuilder.group({
            furnished: [''],
            parking: [''],
            petAllowed: [''],
            accessForCar: [''],
            landSharing: ['']
        });
    }

    initFormValues(): void {
        this.formValues = this.formBuilder.group({
            listingType: ['1'],
            serviceId: ['1'],
            cateId: ['1'],
            properties: [[]],
            price: this.formBuilder.group({
                unitCurrency: ['vnd'],
                mainPrice: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
                deposit: ['', Validators.pattern('^[0-9]*$')],
                manageFee: ['', Validators.pattern('^[0-9]*$')],
                rentalNext: ['', Validators.pattern('^[0-9]*$')],
                includeFee: [0],
                loanSupport: [0]
            }),
            location: this.formBuilder.group({
                projectId: [null],
                projectName: [''],
                address: this.formBuilder.group({
                    cityId: [{ value: null, disabled: false }],
                    districtId: [{ value: null, disabled: false }],
                    wardId: [{ value: null, disabled: false }],
                    address: [{ value: '', disabled: false }],
                    latitude: [{ value: '', disabled: false }, Validators.required],
                    longitude: [{ value: '', disabled: false }, Validators.required]
                })
            }),
            facilities: [],
            desc: this.formBuilder.group({
                title: this.formBuilder.group({
                    vi: ['', Validators.required],
                    en: ['', Validators.required]
                }),
                description: this.formBuilder.group({
                    vi: ['', Validators.required],
                    en: ['', Validators.required]
                })
            }),
            medias: this.formBuilder.group({
                photos: [[]],
                link: ['']
            }),
            swap: [],
            contacts: this.formBuilder.group({
                agents: [[]],
                contact: this.formBuilder.group({
                    name: [''],
                    phone: [''],
                    email: [''],
                    comNumber: [0],
                    comPercent: [0]
                })
            }),
            emailContact: [''],
            isRenew: [''],
            promotions: this.formBuilder.group({
                publishFee: 0,
                numberDays: ['1'],
                publishedAt: [''],
                packages: [],
                isRenew: ['0']
            })
        });
    }

    handleCloseModal() {
        this.modal.close();
    }

    convertToSubmitValues(): Agency {
        const properties = [];
        const formValues = this.formValues.value;
        Object.keys(this.formComercial.value).forEach(key => {
            properties.push({
                key,
                value: this.formComercial.value[key]
            });
        });
        Object.keys(this.formFurnished.value).forEach(key => {
            properties.push({
                key,
                value: this.formFurnished.value[key]
            });
        });
        const result = {
            listingType: formValues.listingType * 1 || 1,
            serviceId: formValues.serviceId * 1 || 1,
            cateId: formValues.cateId * 1 || 1,
            properties: properties,
            price: {
                unitCurrency: formValues.price.unitCurrency || '',
                mainPrice: formValues.price.mainPrice || 0,
                deposit: formValues.price.deposit || 0,
                manageFee: formValues.price.manageFee || 0,
                rentalNext: formValues.price.rentalNext || 0,
                includeFee: formValues.price.includeFee || false,
                loanSupport: formValues.price.loanSupport || false
            },
            location: {
                projectId: formValues.location.projectId * 1,
                projectName: formValues.location.projectName || '',
                address: {
                    streetNumber: formValues.location.address.address || '',
                    streetName: formValues.location.address.address || '',
                    cityId: formValues.location.address.cityId || 1,
                    districtId: formValues.location.address.districtId || 1,
                    wardId: formValues.location.address.wardId || 1,
                    address: formValues.location.address.address || '',
                    latitude: formValues.location.address.latitude || '',
                    longitude: formValues.location.address.longitude || ''
                }
            },
            facilities: formValues.facilities || [],
            desc: {
                title: {
                    vi: formValues.desc.title.vi || '',
                    en: formValues.desc.title.en || ''
                },
                description: {
                    vi: formValues.desc.description.vi || '',
                    en: formValues.desc.description.en || ''
                }
            },
            medias: {
                photos: formValues.medias.photos || [],
                link: formValues.medias.link || ''
            },
            swap: formValues.swap || [],
            contacts: {
                agents: formValues.contacts.agents || []
                // contact: {
                //     name: formValues.contacts.contact.name || '',
                //     phone: formValues.contacts.contact.phone || '',
                //     email: formValues.contacts.contact.email || '',
                //     comNumber: formValues.contacts.contact.comNumber || 0,
                //     comPercent: formValues.contacts.contact.comPercent || 0
                // }
            },
            emailContact: formValues.contacts.contact.emailContact || 'thuanngo@abc.xyz',
            promotions: {
                numberDays: formValues.promotions.numberDays || 0,
                publishedAt: formValues.promotions.publishedAt || '2018-08-09 15:51:33',
                packages: formValues.promotions.packages || [],
                isRenew: formValues.promotions.isRenew || false
            },
            isRenew: formValues.promotions.isRenew || false,
            publish: true,
            publishedAt: formValues.promotions.publishedAt || '2018-08-09 15:51:33'
        };

        if (formValues.contacts.contact.name) {
            result.contacts['contact'].name = formValues.contacts.contact.name;
        }
        if (formValues.contacts.contact.phone) {
            result.contacts['contact'].phone = formValues.contacts.contact.phone;
        }
        if (formValues.contacts.contact.email) {
            result.contacts['contact'].email = formValues.contacts.contact.email;
        }
        if (formValues.contacts.contact.comNumber) {
            result.contacts['contact'].comNumber = formValues.contacts.contact.comNumber;
        }
        if (formValues.contacts.contact.comPercent) {
            result.contacts['contact'].comPercent = formValues.contacts.contact.comPercent;
        }
        return result;
    }

    ngOnDestroy() {
        if (this.modal) {
            this.modal.close();
        }
    }
}
