# Apuntes

Para crear un app con react debemos usar el comando:

```bash
npx create-react-app nombre-app
```

El comando `npx` trae desde internet la ultima version de react y lo instala en nuestro proyecto.

Una vez generado este, nos muestra una serie de comando que podemos usar para trabajar con el proyecto.

- **npm start**: Inicia el servidor de desarrollo.	
- **npm run build**: Genera un build de producción.
- **npm run test**: Ejecuta los tests.
- **npm run eject**: Elimina la herramienta de eject y toma todos los archivos de configuración y los deja en el directorio de nuestra aplicación. Esto se hace cuando queremos customizar una aplicación al detalle, pero para la mayoría de aplicaciones hacer esto no es necesario.

## Estructura de nuestro proyecto

- **src**: Contiene todos los archivos de nuestro proyecto.
- **public**: Contiene todos los archivos estáticos que van a ser públicos para los usuarios, como los iconos, las imágenes, el index.html, etc.

## React y JSX

En nuestro archivo ``index.js`` nos encontramos con algo así:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//<p>Hello World</p>
const x = React.createElement('p', null, 'Hello World');

ReactDOM.render(
  <p>Hello World</p>, document.getElementById('root')
)
```

Si nos fijamos bien tenemos un código tal que así:

```js
ReactDOM.render(
  <p>Hello World</p>, document.getElementById('root')
)
```

La etiqueta ``<p>Hello World</p>`` no es exactamente HTML, sino que es algo propio de React que se llama ``JSX``, el cual es muy similar a HTML, pero podemos usarlo junto con JavaScript.

Pero si dejamos el código así tal cual no es muy reutilizable, ademas de que no podemos pasarle ningún argumento a la etiqueta, por lo que no podemos usarlo en una aplicación real.

Una buena forma sería así:

```js
const X = () => <p>Hello World</p>; // componente funcional, porque es una función

ReactDOM.render(
    <X/>, document.getElementById('root')
)
```

De esta manera estamos creando un componente de React.

``JSX`` no es mas que azúcar sintáctica para que no tengamos que estar escribiendo constantemente ``React.createElement`` sino que lo remplazamos por una sintaxis más sencilla como ``<X/>``.

### Componentes y propiedades

Los componentes pueden recibir propiedades, por ejemplo el componente ``LI`` recibe varias:

```js
const LI = ({ children, estado, casa, edad }) => { 
  console.log(casa, edad);
  return (
    <li>{children} estoy {estado}</li>
  )
}

const X = () =>
  <ul>
    <LI estado={'feliz'}
    casa={false}
    edad={26}
    >Chanchito</LI>
    <LI estado={"Triste"}>Chanchito</LI>
    <LI estado={"Emocionado"}>Felipe</LI>
  </ul>

ReactDOM.render(
  <X />, document.getElementById('root')
)
```

En este caso mediante la desestructuración de los argumentos podemos acceder a las propiedades que nosotros le pasamos al componente `LI`(``estado``, ``casa``, ``edad``) y así poder usarlas dentro de el.

La propiedad ``children`` es una propiedad que tomara el valor de lo que esté dentro de la etiqueta.

Podemos crear mas propiedades como `estado`, `casa`, `edad` y luego manejarlas dentro del componente.

### Anatomía de un componente en React

```js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

``React.strictMode`` nos va a mostrar errores o advertencias cuando nosotros no estemos siendo estrictos con nuestro código, de esta manera cuando vayamos a la consola vamos a ver errores o advertencias.

Un componente nuevo que declaremos tiene que cumplir con varias cosas:

- Lo primero, un componente puede ser declarado como una función o como una constante usando las fat arrows functions. Por lo que podemos crear componentes de las dos maneras.

- Lo segundo, un componente siempre debe retornar un contenido, puede ser incluso un string vacío, pero por lo general retornamos contenido ``JSX``, JSX es una especie de HTML pero recargado, porque nos brinda algunas funcionalidades que normalmente no tendríamos en HTML, como por ejemplo el hecho de imprimir valores.

```js
const App = () => {
  const valor = 'Waton';
  return (
    <p>Perro {valor}</p>
  );
}
```

También podemos asignarle clases de CSS a un elemento JSX con la palabra reservada ``className``.

```js
const LI = () =>{
    return (
        <li>valor de li</li>
    )
}

const App = () => {
  const valor = 'Waton';
  return (
    <ul className="clase-css">
        <LI></LI>
    </ul>
  );
}
```

La razón de que creemos componentes que hace lo mismo que un elemento HTML primitivo es que podemos asignarle mas comportamiento o incluso también estilos.