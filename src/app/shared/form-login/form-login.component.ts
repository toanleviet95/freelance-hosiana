import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '@core/models/user';
import { AppState, selectAuthState } from '@core/store/app.states';
import { LogIn, LogOut } from '@core/store/auth/actions';
import { LanguageService } from '@core/services/language.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
    selector: 'app-form-login',
    templateUrl: './form-login.component.html',
    styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
    loginForm: FormGroup;
    getState: Observable<any>;
    errorMessage: string | null;
    windowDefined;
    public size: any = 'nomal';
    public lang: any = 'en';
    public theme: any = 'Light';
    public type: any = 'type';
    public captchaIsLoaded = false;
    public captchaSuccess = false;
    public captchaResponse?: string;
    currentLanguage: any;
    email:string;
    password:string;
    remember_password:boolean;
    isLoginProgress = false;

    constructor(private store: Store<AppState>, private formBuilder: FormBuilder, private languageService: LanguageService, private localStorage: LocalStorageService) {
        this.getState = this.store.select(selectAuthState);
        this.currentLanguage = this.languageService.getCurrentLanguage();
        if (this.currentLanguage === 'vi') {
            this.lang = 'vn';
        } else {
            this.lang = 'en';
        }
    }

    ngOnInit() {
        if (typeof window !== 'undefined') {
            this.windowDefined = true;
        }
        this.getState.subscribe(state => {
            this.errorMessage = state.errorMessage;
        });
        let trieveUser = this.localStorage.retrieve('datauser');
        this.email = trieveUser && trieveUser.email && trieveUser.email != '' ? trieveUser.email : '';
        this.password = trieveUser && trieveUser.password && trieveUser.password != '' ? trieveUser.password : '';
        if(this.email != '' && this.password != '') {
            this.remember_password = true;
        }
        this.loginForm = this.formBuilder.group({
            //agency.dev@yopmail.com
            //123456
            email: [this.email,
            { validators: [Validators.required, Validators.minLength(6), Validators.email], updateOn: 'blur' }],
            password: [this.password, { validators: [Validators.required, Validators.minLength(6)], updateOn: 'blur' }]
        });
    }

    handleLoad(): void {
        this.captchaIsLoaded = true;
    }

    handleSuccess(captchaResponse: string): void {
        this.captchaSuccess = true;
    }

    /**
     * Remember password function 
     * 
     * @param {Any} event
     * 
     * @return mixed
     */
    remmemberPassword(event) {
        let checked = event.target.checked;
        if(!checked) {
            return this.localStorage.clear('datauser');
        }
        this.localStorage.store('datauser', {email: this.loginForm.controls['email'].value, password: this.loginForm.controls['password'].value});
    }


    onSubmit(): void {
        if (this.loginForm.invalid || this.captchaSuccess === false) {
            return;
        }
        // const payload = {
        //     email: this.loginForm.value.email,
        //     password: this.loginForm.password
        // };

        const payload: User = this.loginForm.value;
        this.store.dispatch(new LogIn(payload));
        this.isLoginProgress = true;
    }
}
