import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import menu from '@config/menu';

import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppState, selectAuthState } from '@core/store/app.states';
import { LogOut } from '@core/store/auth/actions';

import { LanguageService } from '@core/services/language.service';

// import { Setting } from '@core/models';
// import { ChangeLang } from '@core/store/settings/actions';

@Component({
  selector: 'app-client-navbar',
  templateUrl: './client-navbar.component.html',
  styleUrls: ['./client-navbar.component.scss']
})
export class ClientNavbarComponent implements OnInit {
  menu: any;
  linkActive = '';
  propertyNavbar = '';
  languages = [];
  languageChosen: any;
  languageOption = [];
  listCurrency:any = [];
  currencyChoosen:any;

  user: Observable<any>;
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private languageService:LanguageService) {
    this.linkActive = `/${this.route.snapshot.url[0].path}`;
      this.languages = [
        {
          name: 'EN',
          locale: 'en',
          translate: {
            vn: "English",
            en: "English"
          }
        },
        {
          name: 'VN',
          locale: 'vi',
          translate: {
            vn: "Tiếng Việt",
            en: "Vietnamese"
          }
        }
      ];
      this.listCurrency = [
        {
          name: 'USD',
          translate: {
            usd: "US Dollar",
            vnd: "Vietnam Dong"
          }
        },
        {
          name: 'VND',
          translate: {
            usd: "Vietnamese",
            vnd: "Đô la Mỹ"
          }
        }
      ]
      let currentLanguage = this.languageService.getCurrentLanguage();
      this.languageChosen = this.languages.filter(item => item.locale == currentLanguage)[0];
      this.currencyChoosen = this.listCurrency[0];
      // this.languageOption = this.languages.filter(val => val.name !== this.languageChosen.name);
      if (this.linkActive === '/home') {
        this.menu = menu.home;
      } else {
        this.menu = menu.client;
      }
      if (this.menu.isFixed) {
        this.propertyNavbar += ' fixed';
      }
      if (this.menu.isTransparent) {
        this.propertyNavbar += ' transparent';
      }
  }

  ngOnInit() {
    // this.user = this.store
    //   .select(selectAuthState)
    //   .pipe(takeUntil(this.unsubscribe))
    //   .map((auth: any) => auth.user);
  }

  changeLanguage(name): any {
    this.languageChosen = this.languages.find(val => val.locale.toLowerCase() === name);
    this.languageService.setLanguage(name.toLowerCase());
  }
  changeCurrency(name): any {
    this.currencyChoosen = this.listCurrency.find(val => val.name === name);
  }
  handlelogOut(): void {
    this.store.dispatch(new LogOut({}));
  }
}
