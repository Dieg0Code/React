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

La razón de que creemos componentes que hacen lo mismo que un elemento HTML primitivo es que podemos asignarle mas comportamiento o incluso también estilos.

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

Esto lo podemos ocupar mas adelante para renderizar un componente u otro dependiendo de una condición, en este caso es ``miVariable``, pero pueden ser valores como si el usuario ha iniciado sesión, si está visitando cierta ruta o lo que nosotros queramos.

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
      <h1 onClick={(el) => console.log('click')}>Hola mundo</h1>
      {arr.map(el => <p> {el} </p>)}
    </div>
  )
}
```

## Componentes Basados en Clases

### Anatomía de un componente basado en clases

Un componente basado en clases es un componente que es declarado usando una clase y que tiene una función ``render()``.

```js
import { Component } from 'react';

class App extends Component {
  render() {
    return(
      <p>Hola mundo</p>
    )
  }
}

export default App;
```

Con `extends Component` indicamos que la clase hereda de `Component` y que será un componente de React. Dentro de esta clase debemos usar el método ``render()`` para renderizar el componente. Este método siempre debe estar cada vez que creamos un componente.

### El state

Para poder hacer que un componente basado en clases sea dinámico, debemos saber que es el estado de un componente.

El estado es algo a lo que podemos acceder directamente desde los componentes que son creados usando clases.

*En los componentes funcionales también podemos acceder al estado, pero esto se hace mediante hooks.*

```js
import {Component} from 'react';

class App extends Component {
  state = {
    texto: 'Hola mundo'
  }

  render() {
    return(
      <p>{this.state.texto}</p>
    )
  }
}
```

El método ``render()`` está de cierta forma relacionado con el state, este se ejecuta siempre en dos condiciones:

1. Cuando el estado del componente cambia.
2. Cuando el método `render()` de un componente padre se ejecuta, por ende, los componentes hijos también ejecutan su método `render()`.

Entonces, se ejecuta cuando llamamos a `this.setState()` o cuando el método `render()` de un componente padre se ejecuta.

El estado de un componente es un objeto llamado ``state``.

```js
state = {
  texto: 'Hola mundo'
}
```

La propiedad de `state` que tienen los componentes es algo que depende únicamente de ellos mismos, nosotros ademas, podemos pasar el estado de un componente hacia abajo, a componentes hijos.

```js
import { Component } from 'react';

class App extends Component {
  state = {
    valor: 3
  }

  render() {
    return(
      console.log(this.state.valor);
      <div>
        <p>Hola</p>
        <button 
          onClick={() => this.setState({valor: this.state.valor + 1})}
        >
          Incrementar valor en 1
        </button>
      </div>
    )
  }
}
```

### ¿Cuando se renderiza un componente?

Como se dijo anteriormente, el método `render()` de un componente se ejecuta en dos condiciones:

1. Cuando el estado del componente cambia.
2. Cuando el método `render()` de un componente padre se ejecuta, por ende, los componentes hijos también ejecutan su método `render()`.

Por ejemplo, si creo un nuevo componente llamado `Button` y lo uso en mi componente `App`, entonces el método `render()` de `Button` se ejecuta cuando método `render()` de `App` se ejecuta.

```js
import { Component } from 'react';

class Button extends Component {
  render() {
    console.log('Ejecutando render de Button');
    return(
      <button>
        Hola
      </button>
    )
  }
}

class App extends Component {
  state = {
    valor: 3
  }
  render() {
    console.log(this.state.valor);
    return(
      <div>
        <p>Hola</p>
        <Button/>
        <button 
          onClick={() => this.setState({valor: this.state.valor + 1})}
        >
          Incrementar valor en 1
        </button>
      </div>
    )
  }
}

export default App;
```

### El ciclo de vida de los componentes

Un componente tiene 3 estado principales:

- Montando
- Actualizando
- Desmontando

`Montando` es cuando estamos insertando en nuestra interfaz un componente por primera vez. Cuando ejecutamos un componente por primera vez, lo primero que se ejecutará es el `constructor()` del componente. El constructor se utiliza en React para que nosotros podamos inicializar o settear propiedades en el estado por defecto.

También podemos utilizar el constructor si es que queremos pasar el contexto de `this` a una función.

Luego de que nuestro componente se ha montado, lo primero que va a ocurrir es que se ejecutará el método de `render()`, luego de eso React se encargará de actualizar el DOM.

Después de eso, si es que nosotros implementamos el método de `componentDidMount()` va a ejecutar toda la lógica que nosotros pusimos en él.

`Actualizando`. Como vimos un componente se actualiza cuando llamaos a su método `setState()` o cuando el método `render()` de un componente padre se ejecuta, luego de eso react se encargará de actualizar el DOM, y por último, el método que se ejecutará una vez nuestro componente se ha actualizado es `componentDidUpdate()`, la diferencia entre `componentDidMount()` y `componentDidUpdate()` es que `componentDidMount()` se ejecuta solo una vez, y `componentDidUpdate()` se ejecuta múltiples veces, siempre que se actualice el componente.

`Desmontando`, esto es cuando ya no vamos a mostrar al usuario algún componente que hayamos definido, como en el caso del renderizado condicional, siempre que decidamos que un componente ya no va a ser mostrado, pasará por el proceso de desmontado, luego de eso, el método `componentWillUnmount()` se ejecutará.

### Montando componentes

```js
import { Component } from 'react';

class Button extends Component {
  state = {}
  constructor(props) {
    super(props);
    console.log('constructor de Button', props);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('Ejecutando render de Button');
    return(
      <button>
        Hola
      </button>
    )
  }
}
```

Como vimos anteriormente, lo primero que se ejecuta en el montado de un componente es el constructor de este. Este constructor recibe como argumento las `props` que le pasamos al componente, pero, como estamos extendiendo de `Component` y la clase es en realidad un componente, debemos usar `super()` para pasar las props al constructor de `Component`.

```js
constructor(props) {
  super(props);
  console.log('constructor de Button', props);
}
```

El método de `componentDidMount()` no recibe ningún argumento y por lo general se usa cuando debemos llamar a `setState()` para poder actualizar el estado de nuestro componente. Se ejecuta al final, después del constructor y después de renderizar el componente.

Este método lo tenemos que utilizar si es que queremos evaluar algo del DOM, para ver si queremos mostrar un modal o algo así. También lo podemos utilizar cuando queremos iniciar llamados AJAX para poder traer datos de una API.

### Actualizando componentes

El método `componenDidUpdate()` recibe dos argumentos, las propiedades anteriores `prevProps` y el estado anterior `prevState`.

```js
componentDidUpdate(prevProps, prevState) {
  console.log('componentDidUpdate', prevProps, prevState);
}
```

Este método no se ejecuta cuando se crea el componente, solamente se ejecuta cuando nosotros lo actualizamos. Para actualizar el componente podemos hacer que el componente se renderice de nuevo cambiando el estado o haciendo que se renderice el componente padre.

### Desmontando componentes

`componentWillUnmount()` es el método que se ejecuta cuando nuestro componente va a ser desmontado.

```js
componentWillUnmount() {
  console.log('componentWillUnmount');
}
```

Para desmontar un componente podemos hacer uso del renderizado condicional.

### Subiendo el estado

```js
import { Component } from 'react';

class Input extends Component {
  state = { valor: '' }

  handleChange = (value) => {
    this.setState({ valor: value });
  }
  render() {
    return(
      <input
        value={this.state.valor}
        onChange={(e) => this.handleChange(e.target.value)}
      />
    )
  }
}

class App extends Component {
  render() {
    return(
      <p>
        Nombre completo:
        <Input/>
        <Input/>
      </p>
    )
  }
}

export default App;
```

En este caso, estamos usando el componente `Input` dos veces en componente `App`, pero tenemos un problema, ¿cómo podemos mostrar los valores que tienen esos campos en un componente de más arriba?, lo que tendría que hacer es ingresar de alguna manera a los componentes `Input` y sacar el valor desde el componente `App`.

Este es un problema muy común, el no dejar que un componente padre sea quien controle el estado.

Muchas veces cuando estamos manejando data de la aplicación, vamos a querer controla el estado de esta idealmente en el componente de más arriba, para que este estado pueda ser compartido entre distintos componentes.

### Levantar el estado de un componente

Para esto debemos tomar el estado que se encuentra solamente localizado en el componente `Input` y lo vamos a subir, es decir, lo vamos a pasar de un componente hijo a un componente padre.

```js
import { Component } from 'react';

class Input extends Component {
  render() {
    return(
      <input
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

class App extends Component {
  state = {
    nombre: '',
    apellido: ''
  }

  updateValues = (prop, value) => {
    this.setState({ [prop]: value });
  }

  render() {
    return(
      <p>
        Nombre completo: {`${this.state.nombre} ${this.state.apellido}`}
        <Input
          value={this.state.nombre}
          onChange={e => this.updateValues('nombre', e.target.value)}
        />
        <Input
          value={this.state.apellido}
          onChange={e => this.updateValues('apellido', e.target.value)}
        />
      </p>
    )
  }
}

export default App;
```

De esta manera estamos cada vez que escribamos dentro de nuestro componente `Input` vamos a actualizar el estado de nuestro componente `App` y de esta manera poder acceder a los valores de los componentes `Input` desde el componente `App`.

### Preguntas sobre métodos y propiedades de los componentes

¿Porque en vez de crear un método, creamos propiedades a las cuales le asignamos una fat arrow function?.

Esto es porque hay una diferencia entre usar una fat arrow function y un método normal, esta diferencia radica en el contexto, el `this`.

Podemos ejemplificarlo con un ejemplo:

```js
import { Component } from 'react';

class Input extends Component {
  render() {
    return(
      <input
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

class App extends Component {
  state = {
    nombre: '',
    apellido: ''
  }

  updateNombre = (value) => {
    this.updateValues('nombre', value.target.value);
  }

  updateValues = (prop, value) => {
    this.setState({ [prop]: value });
  }

  render() {
    return(
      <p>
        Nombre completo: {`${this.state.nombre} ${this.state.apellido}`}
        <Input
          value={this.state.nombre}
          onChange={this.updateNombre}
        />
        <Input
          value={this.state.apellido}
          onChange={e => this.updateValues('apellido', e.target.value)}
        />
      </p>
    )
  }
}

export default App;
```

Creamos un nuevo método:

```js
updateNombre = (value) => {
  this.updateValues('nombre', value.target.value);
}
```

Y un poco la propiedad `onChange` del primer `Input`:

```js
<Input
  value={this.state.nombre}
  onChange={this.updateNombre}
/>
```

Si intentamos usar este código nos arrojará error, `Cannot read property 'updateValues' of undefined`.

Si intentamos imprimir por consola el valor de `this` nos arrojará `undefined`.

La razón de este error es que el contexto de `this` de los métodos cambia cuando estamos pasando el método directamente aun componente hijo.

```js
<Input
  value={this.state.nombre}
  onChange={this.updateNombre}
/>
```

`this.updateNombre` es nuestro método, pero dentro de este ya no podemos llamar a `this` porque se perdió el contexto al pasarlo a el componente hijo.

Para solucionar este problema podemos hacerlo de varias maneras:

La forma más sencilla es usar una fat arrow function.

```js
updateNombre = (value) => {
  this.updateValues('nombre', value.target.value);
}
```

Otra forma es:

```js
updateNombre {
  this.updateValues('nombre', value.target.value);
}
```

```js
<Input
  value={this.state.nombre}
  onChange={(arg) => this.updateNombre(arg)}
/>
```

Otra forma es hacer bind de this a nuestro método en el constructor:

```js
constructor(props) {
  super(props);
  this.updateNombre = this.updateNombre.bind(this);
}
```

De esta forma nos aseguramos que el contexto de `this` será App.

Son varias formas de hacer lo mismo, pero como podemos ver obviamente la forma más sencilla es usar una fat arrow function.