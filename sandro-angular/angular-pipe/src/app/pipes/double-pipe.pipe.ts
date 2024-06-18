import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doublePipe'
})
export class DoublePipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    console.log(value)
    return value.map((el:number)=>el*2);
  }

}
