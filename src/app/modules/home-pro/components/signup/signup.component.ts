import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AppState, selectAuthState } from '@app/core/store/app.states';
import { SignUp } from '@app/core/store/auth/actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
  public multi:boolean = true;
  windowDefined;
  errorMessage;
  getState: Observable<any>;
  public pageToCssNav = 'become-member-navbar';
  submitted = false;

  formGroup: FormGroup;
  useImageFile: File;

  public size:any = 'nomal';
  public lang:any = 'en';
  public theme:any = 'Light';
  public type:any = 'type';
  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaResponse?: string;

  /**
   * @param {FormGroup} fb FormGroup
   * @param {string} location of the customer when sign up
   *
   */

  constructor(private fb: FormBuilder, private location: Location, private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
  }
  goToPrevious() {
    this.location.back();
  }

  handleLoad(): void {
      this.captchaIsLoaded = true;
  }

  handleSuccess(captchaResponse: string): void {
      this.captchaSuccess = true;
  }
  submitSignup() {
    this.submitted = true;
    if (this.formGroup.invalid || this.captchaSuccess === false) {
      return;
    }
    const thisFormValue = this.formGroup.value;
    // this.store.dispatch(new SignUp({ data: thisFormValue }));
  }
  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.windowDefined = true;
    }
    this.getState.subscribe(state => {
      this.errorMessage = state.errorMessage;
    });
    this.formGroup = this.fb.group({
      career: ['', Validators.required],
      taxCode: ['', Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(11)])],
      title: ['', Validators.required],
      firstNameCustomer: ['', Validators.required],
      lastNameCustomer: ['', Validators.required],
      phoneCustomer: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      emailCustomer: ['', Validators.compose([Validators.required, Validators.email])],
      messageCustomer: [''],
      file: ['', Validators.required]
    });
  }
}
