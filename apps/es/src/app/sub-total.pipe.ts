import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subTotal'
})
export class SubTotalPipe implements PipeTransform {
  currencyPipe;
  constructor(){}
  transform(cart): any {
    let total = 0;
    Object.values(cart).forEach((p: any)=> {
      if(p.count){
        total += p.count * p.salePrice;
      }
    });

    return total;
  }

}
