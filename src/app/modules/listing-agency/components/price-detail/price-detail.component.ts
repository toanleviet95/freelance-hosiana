import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-price-detail',
    templateUrl: './price-detail.component.html',
    styleUrls: ['./price-detail.component.scss']
})
export class PriceDetailComponent implements OnInit {
    @Input() formValues: FormGroup;
    @Input() exchangeRates: any;

    currencyTarget = 0;
    langTarget = 'vnd';
    priceInput = '';
    priceInputDollar = 0;
    depositInputDollar = 0;
    depositInputDollarMeter = 0;
    manageFeeInputDollar = 0;
    rentalRecorded = 0;

    constructor() { }

    ngOnInit() {
        this.exchangeRates.subscribe(item => {
            if (item) {
                this.currencyTarget = item.exchangeRate;
            }
        });
    }

    onChangeCurrency(currency) {
        this.langTarget = currency;
    }

    onChangePrice(price) {
        const billion = Math.floor(price * 1 / 1000);
        const million = price * 1 % 1000;
        if (billion > 0) {
            this.priceInput = billion + ' Tỷ ';
        }
        this.priceInputDollar = Math.floor(price * 1000000 / this.currencyTarget * 1);
        if (million > 0) {
            this.priceInput += million + ' Triệu';
        }
    }

    onChangeDeposit(price) {
        this.depositInputDollar = price;
        if (this.langTarget === 'vnd') {
            this.depositInputDollar =  Math.floor(price * 1000000 / this.currencyTarget * 1);
        } else {
            this.depositInputDollar = price * 1000000;
        }
    }

    onChangeDepositMeter(price) {
        this.depositInputDollarMeter = price * 1000000;
        if (this.langTarget === 'vnd') {
            this.depositInputDollarMeter =  Math.floor(price * 1000000 / this.currencyTarget * 1);
        }
    }

    onChangeManageFee(price) {
        this.manageFeeInputDollar = price * 1000000;
        if (this.langTarget === 'vnd') {
            this.manageFeeInputDollar =  Math.floor(price * 1000000 / this.currencyTarget * 1);
        }
    }

    onChangeRentalRecorded(price) {
        this.rentalRecorded = price * 1000000;
        if (this.langTarget === 'vnd') {
            this.rentalRecorded =  Math.floor(price * 1000000 / this.currencyTarget * 1);
        }
    }
}
