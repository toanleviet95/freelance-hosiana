I. TRANSLATE
    * Step1: Add translate key in html file
        + Use with the pipe: 
            <input formControlName="email" type="text" placeholder="{{'App.Email' | translate}}" autofocus>
        + Use with the directive:
            <p class="h5 text-center py-4" translate>Homepro.WelcomeTitle</p>
            or: <h3 [translate]="'Homepro.TitleBecomeMemberAgency'"></h3>
    * Step2: In project root run command: `npm run extract`, it will export key in /assets/i18n/*.json
    * Step3: Open file, focus en.json and fill content for keys(`Newkey` is null):
        {
            "App": {
                "Email": "Email",
                "Login": "Login",
                "Password": "Password"
            },
            "Homepro": {
                "TitleBecomeMemberAgency": "Become a member and join the best community of experts",
                "WelcomeTitle": "WELCOME TO HOSIANA PRO",
                "Newkey": ""
            }
        }

    ** Note: Please view existed key and create new key with this format.

II. ERRORS FORM
    * Common class form error in: /src/app/shared/show-errors and it will be included in shared module. When you use show-error component, it will translate all error messages to user language.
    * How to use: copy and paste show-errors selector in place of display errors:
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <p class="h5 text-center py-4" translate>Homepro.WelcomeTitle</p>
            <div class="md-form">
                <i class="fa fa-envelope prefix grey-text"></i>
                <input formControlName="email" type="text" placeholder="{{'App.Email' | translate}}" autofocus>
                <app-show-errors [control]="loginForm.controls.email"></app-show-errors>
            </div>
            <div class="md-form">
                <i class="fa fa-lock prefix grey-text"></i>
                <input formControlName="password" type="password" placeholder="{{'App.Password' | translate}}">
                <app-show-errors [control]="loginForm.controls.password"></app-show-errors>
            </div>
            <div class="text-center py-4 mt-3">
                <button class="btn btn-cyan waves-light btn-red" mdbWavesEffect [disabled]="loginForm.invalid" translate>App.Login</button>
            </div>
        </form>

III. CODING ERRORS SHOULD AVOID
    1. Case1: format translate key
        yourConnections
        your_connections

        ** Expected: YourConnections

    2. Case2:
            import { Component, OnInit } from '@angular/core';
            @Component({
                selector: 'app-client-navbar',
                templateUrl: './client-navbar.component.html',
                styleUrls: ['./client-navbar.component.scss']
                })
            export class ClientNavbarComponent implements OnInit {
                constructor() { }
                ngOnInit() {
                }
            }

        ** Expected:
            import { Component } from '@angular/core';
            @Component({
                selector: 'app-client-navbar',
                templateUrl: './client-navbar.component.html',
                styleUrls: ['./client-navbar.component.scss']
            })
            export class ClientNavbarComponent { }
        ** Reason: diffusion, down performance.

    3. Case 3: Constructor and ngOnInit: https://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit/35763811#35763811
        ** Example: 
        ** Expected: Move all logic in constructor to ngOnInit