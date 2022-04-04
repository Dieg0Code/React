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

Si dejamos el código así tal cual no es muy reutilizable, ademas de que no podemos pasarle ningún argumento a la etiqueta, por lo que no podemos usarlo en una aplicación real.

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

### Agregando estilos a los componentes con inline style

Un inline style es cuando en nuestro componente usamos la propiedad ``style`` y le pasamos un objeto javascript.

```js
const estilo = {
  backgroundColor: 'red',
  color: '#fff',
  padding: '10px 15px',
}

const LI = ({children}) => {
  return (
    <li style={estilo} className="clase-css"> {children} </li>
  )
}
```

Podemos asignarle a este objeto todas o casi todas las propiedades de css que conocemos para darle un estilo al componente LI.

A diferencia del CSS común, el cual separa las palabras con un guión, en React se hace con camelCase (``backgroundColor`` en vez de ``background-color``).

También al ser un objeto javascript podemos usar arrow functions para pasarle argumentos al estilo.

```js
const estilo = ({ bg = '#222' }) => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px',
});
```

Incluso podemos combinar estilos con la ayuda del spread operator ``...``.

```js
import logo from './logo.svg';
import './App.css';

const estilo2 = {
  boxShadow: '0 5 3px rgba(0,0,0,0.)',
}

const estilo = ({ bg = '#222' }) => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px',
});

const LI = ({ children, estado }) => {
  return (
    <li style={{...estilo2, ...estilo({ bg: '#333' })}} className='clase-li'>{children} = {estado}</li>
  );
}

const App = () => {
  const valor = 'Waton';
  return (
    <ul style={estilo({ bg: '#750' })} className='clase-css'>
      <LI estado="feliz">valor de li</LI>
    </ul>
  );
}

export default App;
```

### Agregando estilos con clases de CSS

Podemos poner los estilos en un archivo diferente y después importarlo donde lo necesitemos.

```js
import './main.css';
```

Dentro de ``main.css`` escribimos el css que luego importamos.

```css
.clase-li {
    background-color: #057;
}
```

```js
const LI = ({ children, estado }) => {
  return (
    <li className='clase-li'>{children} = {estado}</li>
  );
}
```

### Reutilizando componentes con estilo

Una practica muy recurrente con React es la reutilización de componentes pequeños que ya tienen un estilo predefinido.

Por ejemplo creamos el componente ``Button`` en un nuevo archivo ``Button.js``.

```js
import './Button.css';

const Button = (props) => {
    return(
        <button {...props} className="btn" />
    )
}

export default Button;
```

Le damos estilos al componente ``Button`` en ``Button.css``.


```css
.btn {
    transition: all 0.3s ease-in-out;
    background-color: #057;
    color: white;
    border: none;
    padding: 15px 25px;
}

.btn:hover {
    background-color: #750;   
}
```

Luego en la ``App``, importamos el componente ``Button``.

```js
import Button from "./Button";

const App = () => {
  return(
    <div>
      <h1>Hola Mundo</h1>
      <Button onClick={() => console.log('click')}>
        Enviar
      </Button>
    </div>
  )
}

export default App;
```

De esta forma separamos un componente pequeño, le damos su estilo y lo exportamos. Luego en la ``App``, importamos el componente y le damos un comportamiento como ``onClick``.

### Componentes interactivos

Con ``onClick`` podemos hacer que los componentes y también elementos HTML tengan comportamiento interactivos. Al darle este comportamiento podemos ver si el usuario hizo click manteniendo alguna tecla presionada.

```js
<h1 onClick={(e) => console.log('click', e)}>Hola Mundo</h1>
```

### Renderizado condicional

Por ahora solo hemos visto como renderizar componentes o elementos JSX directamente, sin una validación previa. La validación previa es algo que se ocupa mucho cuando estamos trabajando con rutas o cuando queremos mostrar cosas cuando el usuario por ejemplo ha iniciado sesión o no, vamos a cambiar el botón de iniciar sesión por algo como "ir a mi panel de administración", "ir a mi perfil" o en vez de decir "hola usuario" lo cambiamos por "hola" + nombre del usuario.

```js
import Button from "./Button";

const App = () => {
  const miVariable = false;

  if(miVariable) {
    return <p>Mi variable es true</p>
  }
  return(
    <div>
      <h1>Hola Mundo</h1>
      <Button onClick={() => console.log('click')}>
        Enviar
      </Button>
    </div>
  )
}

export default App;
```

De esta forma, si ``miVariable`` fuese ``true``, el componente ``Button`` no se renderizaría, en vez de eso, se renderizaría el componente ``p``.

Esto lo podemos ocupar mas adelante para renderizar un componente u otro dependiendo de una condición, en este caso es ``miVariable``, pero pueden ser valores como si el usuario ha iniciado sesión, si esta visitando cierta ruta o lo que nosotros queramos.

### Listas y sus Keys en React

En React cuando trabajamos con listas que vamos a imprimir, que vienen de un array o de una colección de objetos, tenemos que indicar un valor único para poder identificar la fila que queremos renderizar, esto es para que React pueda saber cual es el elemento que tiene que renderizar en caso de que este llegase a cambiar.
  
```js
const arr = [
  "uno",
  "dos",
  "tres",
]

const App = () => {
  return(
    <div>
      <h1 onClick={(e) => console.log('click')}>Hola mundo</h1>
      {arr.map(e => <p> {e} </p>)}
    </div>
  )
}