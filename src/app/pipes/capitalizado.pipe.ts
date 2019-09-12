import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})

export class capitalizadoPipe implements PipeTransform {
    transform(value: string, todas: boolean = true): string {

        value = value.toLowerCase(); // cadena los pasa todos a minusculas
        console.log(value);

        let nombres =  value.split(' ');
        console.log(nombres); // lo pasa un arreglo y lo desgragmenta por cadaa esspacio ( marco lopez angeles)
        if (todas) {
           // tslint:disable-next-line: forin
            for (let i in nombres) {
                nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1); // realiza la iteacion de acuerdo aal arreglo de nombres 
            }
        } else {
            nombres[0] =  nombres[0][0].toUpperCase() + nombres[0].substr(1);
        }

        return nombres.join(' ');
    }
}
