import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  formGroup: FormGroup;
  url = '';
  submitted = false;
  listLang = ['English', 'Vietnamese'];
  listLangOfUser = ['English'];
  /** List All Cities and defined selected city */
  listCities = ['Ho Chi Minh', 'Ha Noi', 'Da Nang'];
  selectedCity = 'Ha Noi';

  /**List All Districts and defined selected district */
  listDistricts = ['Quan 1', 'Quan 2', 'Quan 3'];
  selectedDistrict = 'Quan 1';
  constructor(private fb: FormBuilder) {}
  submit() {
    this.submitted = true;
    console.log(this.formGroup);
  }
  /**
   *
   * @param {Fn} onFileChange: event when file has changed
   */
  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let colFile = this.formGroup.get('file');
      let file = event.target.files[0];
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);

      let dick = new Array();
      dick['filename'] = file.name;
      dick['filetype'] = file.type;
      colFile.setValue(dick);
      colFile.setErrors(null);
    }
  }

  /**
   * @param {Fn} deleteAvatarValue : "Delete image when preview upload"
   */
  deleteAvatarValue() {
    this.formGroup.get('file').setValue(null);
    this.formGroup.get('file').setErrors({ required: true });
  }
  changeCheckbox(event) {
    let colFile = this.formGroup.get('language');
  }
  show(t) {
    t.show();
  }
  ngOnInit() {
    this.formGroup = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      phone: [null, Validators.compose([Validators.required, Validators.minLength(10)])],
      language: [null, Validators.required],
      file: [null, Validators.required],
      address: [null],
      district: [null],
      city: [null]
    });
    this.formGroup.controls['city'].setValue(this.selectedCity, { onlySelf: true });
    this.formGroup.controls['district'].setValue(this.selectedDistrict, { onlySelf: true });
  }
}
