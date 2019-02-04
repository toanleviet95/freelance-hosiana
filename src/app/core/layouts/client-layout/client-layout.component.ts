import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html'
})
export class ClientLayoutComponent implements OnInit, AfterViewInit {
  href = '';
  loading = false;
  constructor(private router: Router, private localStorage:LocalStorageService) {
      let auth = this.localStorage.retrieve('auth');
      if(this.router.url == '/home/become-member' && auth && auth.token) {
        this.router.navigateByUrl('/listing-agency');
      }
  }

  ngOnInit() {
    this.href = this.router.url;
  }

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.loading = false;
      }
    });
  }
}
