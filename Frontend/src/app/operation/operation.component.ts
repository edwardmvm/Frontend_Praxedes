import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent {
  // Variables para el registro y la autenticación
  nombre = '';
  apellido = '';
  doctoIdent = '';
  email = '';
  clave = '';
  cia = '';
  username = '';
  password = '';
  companyId = '';

  episodios: Episodio[] = [];
  personajesPorEpisodio: PersonajesPorEpisodio = {};

  constructor(private http: HttpClient, private router: Router) {}

  // Método para registrar
  registrar() {
    const url = '/api-seleccion/SOL/RegistroInicialSolicitante';
    const datosRegistro: DatosRegistro = {
      nombre: this.nombre,
      apellido: this.apellido,
      doctoIdent: this.doctoIdent,
      email: this.email,
      clave: this.clave,
      cia: '10' // Este valor es fijo siempre 10
    };

    this.http.post(url, datosRegistro).subscribe(
      (response: any) => {
        console.log('Registro exitoso', response);
        localStorage.setItem('token', response.token); // Guarda el token
      },
      (error) => {
        console.error('Error en el registro', error);
      }
    );
  }

  // Método para autenticar
  autenticar() {
    const url = '/api-security/SEG';
    const datosAutenticacion: DatosAutenticacion = {
      username: this.username,
      password: this.password,
      companyId: '10', // Este valor es fijo siempre 10
      desdeMs: true
    };

    this.http.post(url, datosAutenticacion).subscribe(
      (response: any) => {
        console.log('Autenticación exitosa', response);
        localStorage.setItem('token', response.token); // Guarda el token
      },
      (error) => {
        console.error('Error en la autenticación', error);
      }
    );
  }

  // Método para obtener los episodios
  obtenerEpisodios() {
    const urlEpisodios = '/api-rickandmorty/episode';
    this.http.get(urlEpisodios).subscribe(
      (response: any) => {
        this.episodios = response.results;
        console.log('Episodios obtenidos', this.episodios);
        // Ahora puedes llamar a una función para obtener los personajes de cada episodio
        this.episodios.forEach(episodio => {
          this.obtenerPersonajesPorEpisodio(episodio.episode);
        });
      },
      (error) => {
        console.error('Error al obtener episodios', error);
      }
    );
  }
  obtenerPersonajesPorEpisodio(episode: string) {
    const urlPersonajes = `/api-rickandmorty/characters/${episode}`;
    this.http.get(urlPersonajes).subscribe(
      (response: any) => {
        this.personajesPorEpisodio[episode] = response.characters;
        console.log('Personajes obtenidos para', episode, this.personajesPorEpisodio[episode]);
      },
      (error) => {
        console.error('Error al obtener personajes para', episode, error);
      }
    );
  }

  // Método para agregar un personaje a favoritos
  agregarFavorito(personaje: Personaje) {
    const url = '/api-seleccion/Favoritos';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    const body = {
      id_caracter: personaje.id_caracter,
      observaciones: personaje.observaciones,
      usuario: personaje.usuario
    };

    this.http.post(url, body, { headers }).subscribe(
      (response) => {
        console.log('Favorito agregado', response);
      },
      (error) => {
        console.error('Error al agregar favorito', error);
      }
    );
  }

  logout() {
    // Borrar el token del almacenamiento local
    localStorage.removeItem('token');
    // Redirigir al componente de autenticación
    this.router.navigate(['/auth']);
  }

}

interface Episodio {
  episode: string;
}
interface Personaje {
  id_caracter: number;
  observaciones: string;
  usuario: string;
}
interface PersonajesPorEpisodio {
  [key: string]: Personaje[];
}

interface DatosRegistro {
  nombre: string;
  apellido: string;
  doctoIdent: string;
  email: string;
  clave: string;
  cia: string;
}

interface DatosAutenticacion {
  username: string;
  password: string;
  companyId: string;
  desdeMs: boolean;

}
