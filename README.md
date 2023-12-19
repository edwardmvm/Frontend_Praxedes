# Aplicación Angular

Esta aplicación Angular proporciona una interfaz de usuario interactiva para la autenticación de usuarios, registro, visualización de episodios de Rick & Morty y gestión de personajes favoritos. Utiliza Angular Material para ofrecer una experiencia de usuario moderna y receptiva.

## Componentes de la Interfaz

### Autenticación (`AuthComponent`)

El componente `AuthComponent` gestiona el proceso de inicio de sesión. Los usuarios deben introducir su nombre de usuario y contraseña.

#### UI de Autenticación

- **Formulario de Inicio de Sesión**: Campos para nombre de usuario y contraseña.
- **Botón de Inicio de Sesión**: Al hacer clic, se autentica al usuario.
- **Mensaje de Error**: Se muestra en caso de fallo en la autenticación.

### Registro y Autenticación (`OperationComponent`)

Este componente permite a los usuarios registrarse y autenticarse en la aplicación.

#### UI de Registro

- **Formulario de Registro**: Campos para nombre, apellido, documento de identidad, email y clave.
- **Botón de Registro**: Registra al usuario en el sistema.

#### UI de Autenticación

- **Formulario de Autenticación**: Campos para nombre de usuario, contraseña y Company ID.
- **Botón de Autenticación**: Autentica al usuario en el sistema.

### Visualización de Episodios y Personajes

Este componente muestra listas de episodios de Rick & Morty y sus personajes.

#### UI de Episodios

- **Lista de Episodios**: Muestra los episodios disponibles.
- **Paginación**: Permite la navegación entre diferentes páginas de episodios.

#### UI de Personajes por Episodio

- **Tarjetas de Personajes**: Muestra información detallada de cada personaje por episodio.

![Autenticación UI](ruta/a/la/imagen/de/autenticacion.png)
*UI de Autenticación*

![Registro UI](ruta/a/la/imagen/de/registro.png)
*UI de Registro*

![Episodios UI](ruta/a/la/imagen/de/episodios.png)
*UI de Episodios*

![Personajes UI](ruta/a/la/imagen/de/personajes.png)
*UI de Personajes por Episodio*

## Navegación y Flujos de Usuario

La aplicación permite a los usuarios navegar fácilmente entre las diferentes secciones:

1. **Inicio de Sesión**: Los usuarios comienzan aquí para acceder a sus cuentas.
2. **Registro**: Los nuevos usuarios pueden crear una cuenta.
3. **Autenticación**: Los usuarios existentes pueden autenticarse.
4. **Episodios y Personajes**: Después de la autenticación, los usuarios pueden explorar los episodios y personajes de Rick & Morty.

Cada componente está diseñado para ser intuitivo y fácil de usar, asegurando una experiencia de usuario fluida.

## Instrucciones de Uso

### Inicio de Sesión

1. Introduce tu nombre de usuario y contraseña.
2. Haz clic en el botón "Iniciar Sesión".
3. Si los datos son correctos, serás redirigido a la página principal.

### Registro

1. Rellena los campos requeridos en el formulario de registro.
2. Haz clic en "Registrar" para crear tu cuenta.

### Autenticar

1. Introduce el nombre de usuario y la contraseña.
   - **Usuario de prueba**: `Usuario1`
   - **Contraseña de prueba**: `Contrasennia1`
2. Haz clic en el botón "Autenticar".
3. Si los datos son correctos, serás redirigido a la página de operaciones.

**Nota**: Estos son datos de prueba y solo funcionarán en un entorno de desarrollo o demostración.

### Navegación Post-Autenticación

Una vez autenticado, podrás:

- **Ver Episodios de Rick & Morty**: Navega a través de la lista de episodios disponibles.
- **Gestionar Personajes Favoritos**: Añade tus personajes favoritos de la serie a tu lista personal.

Recuerda cerrar sesión cuando termines para asegurar la seguridad de tu cuenta.

## Errores Encontrados

Durante el desarrollo y las pruebas locales, se descubrió que ciertas rutas de APIs no cuentan con acceso. Para abordar este problema, se creó una configuración de proxy que permite el uso de estas APIs en un entorno de pruebas local. A continuación se muestra la configuración del proxy utilizada:

```json
{
  "/api-rickandmorty": {
    "target": "https://rickandmortyapi.com/api/",
    "secure": false,
    "pathRewrite": {
      "^/api-rickandmorty": ""
    },
    "changeOrigin": true
  },
  "/api-security": {
    "target": "https://pruebas.midasoft.co:5443/Apis_DLLO/Security/",
    "secure": false,
    "pathRewrite": {
      "^/api-security": ""
    },
    "changeOrigin": true
  },
  "/api-seleccion": {
    "target": "https://pruebas.midasoft.co:5443/Apis_DLLO/Seleccion/",
    "secure": false,
    "pathRewrite": {
      "^/api-seleccion": ""
    },
    "changeOrigin": true
  }
}
