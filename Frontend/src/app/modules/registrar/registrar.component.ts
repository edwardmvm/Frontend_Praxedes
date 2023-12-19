// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-registrar',
//   templateUrl: './registrar.component.html',
//   styleUrls: ['./registrar.component.scss']
// })
// export class RegistrarComponent {
//   nombre = '';
//   apellido = '';
//   doctoIdent = '';
//   email = '';
//   clave = '';
//   cia = '10'; // Este valor es fijo siempre 10

//   registrar() {
//     const url = '/api-seleccion/SOL/RegistroInicialSolicitante';
//     const datosRegistro: DatosRegistro = {
//       nombre: this.nombre,
//       apellido: this.apellido,
//       doctoIdent: this.doctoIdent,
//       email: this.email,
//       clave: this.clave,
//       cia: '10' // Este valor es fijo siempre 10
//     };

//     this.http.post(url, datosRegistro).subscribe(
//       (response: any) => {
//         console.log('Registro exitoso', response);
//         localStorage.setItem('token', response.token); // Guarda el token
//       },
//       (error) => {
//         console.error('Error en el registro', error);
//       }
//     );
//   }

// }

// interface DatosRegistro {
//   nombre: string;
//   apellido: string;
//   doctoIdent: string;
//   email: string;
//   clave: string;
//   cia: string;
// }
