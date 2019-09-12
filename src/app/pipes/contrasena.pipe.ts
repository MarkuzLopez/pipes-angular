import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {
    if (activar) {
      let salida: string = '';
      console.log(salida);
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < value.length; i++) {
        salida += '*';
        console.log(salida);
      }
      console.log(salida);
      return salida;
    } else {
      console.log(value);
      return value;
    }
  }

}
