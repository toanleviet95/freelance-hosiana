import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spellCurrency'
})
export class SpellCurrencyPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return 'test ok';
  }
}
