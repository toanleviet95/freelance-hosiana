import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';
export function _(str: string) {
  return str;
}

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html'
  // styleUrls: ['./show-errors.component.scss']
})
export class ShowErrorsComponent {
  constructor(private translate: TranslateService) {}

  shouldShowErrors(): boolean {
    return this.control && this.control.errors && (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    // let errors = Object.keys(this.control.errors)
    //   .map(field => this.getMessage(field, this.control.errors[field]));
    // return errors;
    return Object.keys(this.control.errors).map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return this.errorMessages[type](params);
  }

  private readonly /*static*/ errorMessages = {
    required: () => this.translate.get(_('App.Error.FormRequired')),
    minlength: params => this.translate.get(_('App.Error.FormMinLength'), { value: params.requiredLength }),
    maxlength: params => this.translate.get(_('App.Error.FormMaxLength'), { value: params.requiredLength }),
    email: () => this.translate.get(_('App.Error.FormEmail'))
    // 'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
    // 'years': (params) => params.message,
    // 'countryCity': (params) => params.message,
    // 'uniqueName': (params) => params.message,
    // 'telephoneNumbers': (params) => params.message,
    // 'telephoneNumber': (params) => params.message
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;
}
