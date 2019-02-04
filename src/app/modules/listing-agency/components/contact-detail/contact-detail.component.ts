import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventEmitter } from 'protractor';

@Component({
    selector: 'app-contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ContactDetailComponent implements OnInit {
    @Input() formValues: FormGroup;
    @Input() agencyStaffs: any;

    options: FormGroup;
    listContact: Array<any>;
    listTeamContact: Array<any>;
    listContactSelect = [];
    listTeamContactSelect = [];

    showFormAddContactmanual = false;

    ngOnInit() {
        this.agencyStaffs.subscribe(data => {
            if (data) {
                this.listContact = data.map(item => {
                    item.commission = '';
                    item.commissionCurency = 'number';
                    item.choosen = false;
                    return item;
                });
            }
        });

        this.listTeamContact = [
            {
                id: 1,
                title: 'Other IA',
                total: 5,
                commission: 0,
                commissionCurency: 'number',
                choosen: false
            },
            {
                id: 2,
                title: 'Best independent agents',
                total: 3,
                commission: 0,
                commissionCurency: 'number',
                choosen: false
            }
        ];
    }

    handleShowFormAddContactManual(): void {
        this.showFormAddContactmanual = true;
    }

    handleSearch(event: any): void {
        if (event.keyCode === 13) {
            if (event.target.value) {
                this.agencyStaffs.subscribe(data => {
                    if (data) {
                        const value = event.target.value;
                        this.listContact = data.filter(
                            item => {
                                if (item.email.indexOf(value) !== -1
                                || item.lastName.indexOf(value) !== -1
                                || item.firstName.indexOf(value) !== -1
                                || item.phone.indexOf(value) !== -1) {
                                    return true;
                                }
                                return false;
                            });
                    }
                });

            }
        }
    }

    handleChooseAgent(event, type): void {
        if (event.target.checked) {
            if (type === 'agent') {
                const commission = this.listContact.find(item => item.id === event.target.value * 1);
                const contact = {
                    userId: event.target.value * 1,
                    groupId: 0
                }
                if (commission.commissionCurency === 'number') {
                    contact['comNumber'] = commission.commission * 1;
                }
                if (commission.commissionCurency === '%') {
                    contact['comPercent'] = commission.commission * 1;
                }

                this.listContactSelect.push(contact);
                this.listContact.forEach(item => {
                    if (item.id === event.target.value * 1) {
                        item.choosen = true;
                    }
                    return item;
                });
            } else {
                const commission = this.listTeamContact.find(item => item.id === event.target.value * 1);
                const contact = {
                    userId: event.target.value * 1,
                    groupId: 0
                }
                if (commission.commissionCurency === 'number') {
                    contact['comNumber'] = commission.commission * 1;
                }
                if (commission.commissionCurency === '%') {
                    contact['comPercent'] = commission.commission * 1;
                }
                this.listContactSelect.push(contact);
                this.listTeamContact.forEach(item => {
                    if (item.id === event.target.value * 1) {
                        item.choosen = true;
                    }
                    return item;
                });
            }
        } else {
            if (type === 'agent') {
                this.listContactSelect = this.listContactSelect.filter(item => item.userId !== event.target.value * 1);
                this.listContact.forEach(item => {
                    if (item.id === event.target.value * 1) {
                        item.choosen = false;
                    }
                    return item;
                });
            } else {
                this.listTeamContactSelect = this.listTeamContactSelect.filter(item => item.userId !== event.target.value * 1);
            }
            this.listTeamContact.forEach(item => {
                if (item.id === event.target.value * 1) {
                    item.choosen = false;
                }
                return item;
            });
        }
        this.formValues.patchValue({ contacts: { agents: type === 'agent' ? this.listContactSelect : this.listTeamContactSelect } });
    }
}
