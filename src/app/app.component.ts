import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Marco';
  nombre2 = 'markuz antony moRAles lopez';

  arreglo = [0, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9, 10];

  PI = Math.PI;

  a = 0.234;

  salario =  12345.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolwerine',
    edad: 500,
    direccion: {
        calle: 'Primera',
        edad: '19'
    }
  };

  valorPromesa = new Promise((resolve, reeject) => {
      setTimeout(() => {
        resolve('Llego la daata!');
      }, 3500);
  });

  fecha = new Date();

  video = '-aA6SkDbYgs';

  activar = true;

  constructor() {
    // console.log(this.valorPromesa);
  }

}
