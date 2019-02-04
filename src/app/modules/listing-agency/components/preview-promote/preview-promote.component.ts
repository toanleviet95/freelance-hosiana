import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-preview-promote',
  templateUrl: './preview-promote.component.html',
  styleUrls: ['./preview-promote.component.scss']
})
export class PreviewPromoteComponent implements OnInit {
  @Input() formValues: FormGroup;
  @Input() promotions: any;

  packagesChosen = [];
  previewItem: any;
  discount = 0;
  totalFee = 0;
  currency = '';

  ngOnInit() {
    this.promotions.subscribe(data => {
      if (data && data.length > 0) {
        this.currency = data[0].unitCurrency === 'vnd' ? 'đ' : '$';
        data.forEach(item => this.totalFee += item.price);
      }
    });

    this.formValues.patchValue({ promotions: { publishFee: this.totalFee ? this.totalFee + this.currency : '0' +
    (this.currency ? this.currency : 'đ') } });

    this.previewItem = {
      isNew: false,
      isHavingGift: false,
      type: '',
      image:
        'https://res.cloudinary.com/hosiana/image/upload/f_auto,q_auto/w_836,h_537/production/assets/listing/HOSIANA-L0011398-0.jpg',
      title: 'Căn hộ 3 phòng ngủ cho thuê tại Vinhomes 54 Nguyễn Chí Thanh',
      location: 'Hà Nội, Đống Đa',
      price: 400,
      priceDiscount: 0,
      isShowBooster: false,
      isShowBorder: false,
      isShowDiscount: false
    };
  }

  handleChangeDay(event): void {
    const value = event.target.value;
    this.formValues.patchValue({ promotions: { numberDays: value } });
  }

  handleChoosePackage(event): void {
    const value = event.target.value * 1;
    if (event.target.checked) {
      if (value === 1) {
        this.previewItem.isNew = true;
      }

      if (value === 2) {
        this.previewItem.isShowBooster = true;
        this.previewItem.isHavingGift = true;
        this.previewItem.type = 'sale';
      }

      if (value === 3) {
        this.previewItem.isShowDiscount = true;
      }

      if (value === 4) {
        this.previewItem.isShowBorder = true;
      }

      this.packagesChosen.push(event.target.value * 1);
    } else {
      if (value === 1) {
        this.previewItem.isNew = false;
      }

      if (value === 2) {
        this.previewItem.isShowBooster = false;
        this.previewItem.isHavingGift = false;
        this.previewItem.type = '';
      }

      if (value === 3) {
        this.previewItem.isShowDiscount = false;
      }

      if (value === 4) {
        this.previewItem.isShowBorder = false;
      }

      const index = this.packagesChosen.indexOf(event.target.value * 1);
      this.packagesChosen.splice(index, 1);
    }

    this.formValues.patchValue({ promotions: { packages: this.packagesChosen } });
  }

  handleChangeDiscount(event: any) {
    this.previewItem.priceDiscount = this.previewItem.price * event.target.value * 1 / 100;
  }
}
