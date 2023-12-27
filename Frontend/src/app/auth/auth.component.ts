import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  username!: string;
  password!: string;
  errorMensaje: string = '';

  constructor(private router: Router) {}

  // login() {
  //   // Aquí implementarías la lógica de autenticación
  //   if (this.username === 'usuario' && this.password === 'contrasena') {
  //     // Autenticación exitosa, redirige al componente deseado (por ejemplo, 'operation')
  //     this.router.navigate(['/operation']);
  //   } else {
  //     this.errorMensaje = 'La autenticación falló.';
  //   }
  // }
  login() {
    console.log('Credenciales ingresadas:', this.username, this.password);
    if (this.username === 'Usuario1' && this.password === 'Contrasennia1') {
      console.log('Autenticación exitosa');
      // Guardar un token simulado en el almacenamiento local
      localStorage.setItem('token', 'token_simulado');
      // Redirigir al componente OperationComponent
      this.router.navigate(['/operation']);
    } else {
      console.log('Autenticación fallida');
      this.errorMensaje = 'La autenticación falló.';
    }
  }
}
