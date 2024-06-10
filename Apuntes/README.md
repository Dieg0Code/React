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

## Hooks

Los Hooks son una forma de manejar el estado y el ciclo de vida de los componentes en React. Consisten en una serie de funciones que nos permiten manipular datos dentro de los componentes funcionales.

### useState

El hook `useState` nos permite manejar el estado de un componente funcional.

```js
import { useState } from 'react';

const App = () => {
  const [texto, setTexto] = useState('Hola mundo');

  return(
    <p>{texto}</p>
  )
}

export default App;
```

`useState` recibe un argumento, el valor inicial del estado, y retorna dos elementos, el valor del estado y una función que nos permite actualizar el estado. En este caso, `texto` es el valor del estado y `setTexto` es la función que nos permite actualizar el estado.

### useEffect

El hook `useEffect` nos permite ejecutar código cuando el componente se monta, se actualiza o se desmonta.

```js
import { useState, useEffect } from 'react';

const App = () => {
  const [texto, setTexto] = useState('Hola mundo');

  useEffect(() => {
    console.log('Componente montado');
  }, []);

  return(
    <p>{texto}</p>
  )
}

export default App;
```

`useEffect` recibe dos argumentos, una función que se ejecuta cuando el componente se monta, se actualiza o se desmonta, y un array de dependencias que le indica a React cuando debe ejecutar la función. Si el array está vacío, la función se ejecuta solo cuando el componente se monta, pero podemos pasarle un array con variables y la función se ejecutará cuando alguna de esas variables cambie.

```js
import { useState, useEffect } from 'react';

const App = () => {
  const [texto, setTexto] = useState('Hola mundo');
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('Componente montado');
  }, [contador]);

  return(
    <div>
      <p>{texto}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar contador</button>
    </div>
  )
}

export default App;
```

En este caso nos apoyamos del Hook `useState` para crear un contador y un botón que incremente el contador. En el `useEffect` pasamos el contador como dependencia, por lo que la función se ejecutará cada vez que el contador cambie.

### Creando un contador

```js
import { useState, useEffect } from 'react';

const App = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContador(contador + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [contador]);

  return(
    <p>{contador}</p>
  )
}

export default App;
```

En este caso, usamos `setInterval` para incrementar el contador cada segundo. En el `useEffect` retornamos una función que se ejecuta cuando el componente se desmonta, en este caso, limpiamos el intervalo.

### useReducer

El hook `useReducer` nos permite manejar el estado de un componente de forma más compleja.

```js
import { useReducer } from 'react';

const initialState = { contador: 0 };

const reducer = (state, action) => {
  switch(action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 };
    case 'decrementar':
      return { contador: state.contador - 1 };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <div>
      <p>{state.contador}</p>
      <button onClick={() => dispatch({ type: 'incrementar' })}>Incrementar contador</button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>Decrementar contador</button>
    </div>
  )
}

export default App;
```

`useReducer` recibe dos argumentos, una función reductora y un estado inicial. La función reductora recibe dos argumentos, el estado actual y una acción, y retorna el nuevo estado. La acción es un objeto que tiene una propiedad `type` que indica que acción se debe ejecutar. En este caso, tenemos dos acciones, `incrementar` y `decrementar`. Para ejecutar una acción, llamamos a la función `dispatch` con la acción que queremos ejecutar.

Podemos definir cualquier estructura de datos que queramos manejar como estado, en este caso, solo tenemos un contador, pero podríamos tener un objeto con varios valores.

Por ejemplo:

```js
const initialState = { contador: 0, nombre: 'Chanchito feliz' };

const reducer = (state, action) => {
  switch(action.type) {
    case 'incrementar':
      return { ...state, contador: state.contador + 1 };
    case 'decrementar':
      return { ...state, contador: state.contador - 1 };
    case 'cambiarNombre':
      return { ...state, nombre: action.payload };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <div>
      <p>{state.contador}</p>
      <p>{state.nombre}</p>
      <button onClick={() => dispatch({ type: 'incrementar' })}>Incrementar contador</button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>Decrementar contador</button>
      <button onClick={() => dispatch({ type: 'cambiarNombre', payload: 'Chanchito triste' })}>Cambiar nombre</button>
    </div>
  )
}

export default App;
```

### useRef

El hook `useRef` nos permite acceder a un elemento del DOM.

```js
import { useRef } from 'react';

const App = () => {
  const input = useRef();

  return(
    <input ref={input} />
  )
}

export default App;
```

`useRef` retorna un objeto con una propiedad `current` que es el elemento del DOM al que queremos acceder. En este caso, `input.current` es el elemento `input`. Podemos usar `useRef` para acceder a cualquier elemento del DOM. Por ejemplo, si queremos acceder a un `div`:

```js
import { useRef } from 'react';

const App = () => {
  const div = useRef();

  return(
    <div ref={div}></div>
  )
}

export default App;
```

## Formularios

Los formularios son una forma de capturar información que puede ser ingresada por el usuario en campos de texto.

Los formularios pueden manejar varias acciones, como enviar datos a un servidor, actualizar el estado de un componente o realizar validaciones. En React, los formularios son manejados de forma similar a los formularios en HTML, pero con algunas diferencias.

### Controlando el estado de un formulario

```js
import { useState } from 'react';

const App = () => {
  const [nombre, setNombre] = useState('');

  const handleChange = (e) => {
    setNombre(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hola ${nombre}`);
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={nombre} onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App;
```

En este caso, tenemos un formulario con un campo de texto y un botón. El campo de texto tiene un valor que es el estado `nombre` y un evento `onChange` que actualiza el estado `nombre` cada vez que el usuario escribe en el campo de texto. El botón tiene un evento `onSubmit` que se ejecuta cuando el usuario envía el formulario. En este caso, el evento `onSubmit` llama a la función `handleSubmit` que muestra un mensaje con el nombre ingresado por el usuario.

### Uncontrolled components

En React, los formularios pueden ser controlados o no controlados. Un formulario controlado es un formulario cuyo estado es manejado por React, mientras que un formulario no controlado es un formulario cuyo estado es manejado por el DOM.

```js
const App = () => {
  const input = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hola ${input.current.value}`);
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" ref={input} />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App;
```

En este caso, el campo de texto no tiene un valor, sino que usamos `useRef` para acceder al valor del campo de texto. Este campo de texto es un formulario no controlado, ya que el estado del campo de texto es manejado por el DOM.

### Cuando usar uncontrolled components

Los formularios no controlados son útiles cuando necesitamos acceder al valor de un campo de texto sin tener que actualizar el estado del componente. Por ejemplo, si necesitamos acceder al valor de un campo de texto para enviarlo a un servidor o para realizar alguna acción, podemos usar un formulario no controlado. Sin embargo, en la mayoría de los casos, es mejor usar un formulario controlado, ya que nos permite manejar el estado del formulario de forma más eficiente.

### Validación de formularios

```js
import { useState } from 'react';

const App = () => {
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setNombre(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nombre.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    alert(`Hola ${nombre}`);
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={nombre} onChange={handleChange} style={{borderColor: error ? 'red' : 'black'}} />
      {error && <p style={{color: 'red'}}>El campo es obligatorio</p>}
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App;
```

En este caso, agregamos un estado `error` que indica si el campo de texto es válido o no. Si el campo de texto está vacío, mostramos un mensaje de error y cambiamos el color del borde del campo de texto a rojo.

### Formularios con varios campos

```js
import { useState } from 'react';

const App = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    if(e.target.name === 'nombre') {
      setNombre(e.target.value);
    } else {
      setApellido(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nombre.trim() === '' || apellido.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    alert(`Hola ${nombre} ${apellido}`);
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" value={nombre} onChange={handleChange} style={{borderColor: error ? 'red' : 'black'}} />
      <input type="text" name="apellido" value={apellido} onChange={handleChange} style={{borderColor: error ? 'red' : 'black'}} />
      {error && <p style={{color: 'red'}}>Los campos son obligatorios</p>}
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App;
```

Podemos manejar varios campos de texto en un formulario usando multiples veces el Hook de `useState` y funciona, pero una forma mas eficiente de hacer esto sin tener que spamear este Hook es usar un solo `useState` y pasarle un objeto.

```js
import { useState } from 'react';

const App = () => {
  const [form, setForm] = useState({ nombre: '', apellido: '' });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.nombre.trim() === '' || form.apellido.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    alert(`Hola ${form.nombre} ${form.apellido}`);
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" value={form.nombre} onChange={handleChange} style={{borderColor: error ? 'red' : 'black'}} />
      <input type="text" name="apellido" value={form.apellido} onChange={handleChange} style={{borderColor: error ? 'red' : 'black'}} />
      {error && <p style={{color: 'red'}}>Los campos son obligatorios</p>}
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App;
```

### Formularios con campos de texto, select, checkbox y radio

```js
import { useState } from 'react';

const App = () => {
  const [form, setForm] = useState({ nombre: '', apellido: '', color: '', sexo: '', terminos: false });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    if(e.target.type === 'checkbox') {
      setForm({
        ...form,
        [e.target.name]: e.target.checked
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.nombre.trim() === '' || form.apellido.trim() === '' || form.color.trim() === '' || form.sexo.trim() === '' || !form.terminos) {
      setError(true);
      return;
    }
    setError(false);
    alert(`Hola ${form.nombre} ${form.apellido}`);
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" value={form.nombre} onChange={handleChange} style={{borderColor: error ? 'red' : 'black'}} />
      <input type="text" name="apellido" value={form.apellido} onChange={handleChange} style={{borderColor: error ? 'red' : 'black'}} />
      <select name="color" value={form.color} onChange={handleChange} style={{borderColor: error ? 'red' : 'black'}}>
        <option value="">-- Seleccione un color --</option>
        <option value="rojo">Rojo</option>
        <option value="verde">Verde</option>
        <option value="azul">Azul</option>
      </select>
      <input type="radio" name="sexo" value="masculino" onChange={handleChange} /> Masculino
      <input type="radio" name="sexo" value="femenino" onChange={handleChange} /> Femenino
      <input type="checkbox" name="terminos" checked={form.terminos} onChange={handleChange} /> Acepto los términos y condiciones
      {error && <p style={{color: 'red'}}>Los campos son obligatorios</p>}
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App;
```

En este caso, tenemos un formulario con campos de texto, select, checkbox y radio. Cada campo tiene un estado y un evento `onChange` que actualiza el estado del campo. El campo de texto y el select tienen un valor que es el estado del campo, mientras que el checkbox y el radio tienen un atributo `checked` que indica si el campo está seleccionado.

## Formik - Gestor de formularios

**Formik** es una librería que nos permite manejar formularios de forma sencilla en React. Con Formik, podemos manejar el estado de un formulario, validar los campos del formulario y enviar los datos del formulario a un servidor.

Hacer los formularios a mano puede ser un poco tedioso y propenso a errores de rendimiento, es por eso que se crearon librerías como Formik para facilitar este proceso.

Para usar Formik, primero debemos instalarlo.

```bash
npm install formik
```

### Creando un formulario con Formik

```js
import { useFormik } from 'formik';
 
const App = () => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: ''
    },
    onSubmit: values => {
      alert(`Hola ${values.nombre} ${values.apellido}`);
    },
  });
 
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="nombre"
        name="nombre"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.nombre}
      />
      <input
        id="apellido"
        name="apellido"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.apellido}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

Formik nos provee de un Hook el cual se llama `useFormik`, este Hook recibe un objeto con dos propiedades, `initialValues` y `onSubmit`. En `initialValues` definimos los valores iniciales de los campos del formulario y en `onSubmit` definimos la función que se ejecuta cuando el usuario envía el formulario. Hacer esto con Formik nos previene de tener que escribir `e.preventDefault()` para no recargar la página.

### Validación de formularios con Formik

```js
import { useFormik } from 'formik';

const App = () => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: ''
    },
    validate: values => {
      const errors = {};
      if(!values.nombre) {
        errors.nombre = 'El nombre es obligatorio';
      }
      if(!values.apellido) {
        errors.apellido = 'El apellido es obligatorio';
      }

      if(values.nombre.length < 3) {
        errors.nombre = 'El nombre debe tener al menos 3 caracteres';
      }

      return errors;
    },
    onSubmit: values => {
      alert(`Hola ${values.nombre} ${values.apellido}`);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="nombre"
        name="nombre"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.nombre}
      />
      {formik.errors.nombre ? <p>{formik.errors.nombre}</p> : null}
      <input
        id="apellido"
        name="apellido"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.apellido}
      />
      {formik.errors.apellido ? <p>{formik.errors.apellido}</p> : null}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
```

Para hacer las validaciones con Formik, debemos agregar una propiedad `validate` al objeto que pasamos a `useFormik`. Esta propiedad recibe una función que recibe los valores del formulario y retorna un objeto con los errores de validación. Si hay errores de validación, Formik muestra un mensaje de error debajo del campo de texto.

### Validar cuando se toca un campo

```js
import { useFormik } from 'formik';

const App = () => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: ''
    },
    validate: values => {
      const errors = {};
      if(!values.nombre) {
        errors.nombre = 'El nombre es obligatorio';
      }
      if(!values.apellido) {
        errors.apellido = 'El apellido es obligatorio';
      }

      if(values.nombre.length < 3) {
        errors.nombre = 'El nombre debe tener al menos 3 caracteres';
      }

      return errors;
    },
    onSubmit: values => {
      alert(`Hola ${values.nombre} ${values.apellido}`);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="nombre"
        name="nombre"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nombre}
      />
      {formik.touched.nombre && formik.errors.nombre ? <p>{formik.errors.nombre}</p> : null}
      <input
        id="apellido"
        name="apellido"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.apellido}
      />
      {formik.touched.apellido && formik.errors.apellido ? <p>{formik.errors.apellido}</p> : null}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
```

Para validar un campo cuando el usuario toca el campo, debemos agregar un evento `onBlur` al campo de texto y llamar a la función `handleBlur` de Formik. `onBlur` es un evento que tienen todos los campos de texto y se ejecuta cuando el usuario toca el campo y luego lo deja. `handleBlur` es una función de Formik que marca el campo como tocado, lo que nos permite mostrar un mensaje de error solo cuando el usuario toca el campo. Con esto mas el `touched` podemos mostrar un mensaje de error solo cuando el usuario toca el campo.

### Componente Formik

Formik también nos provee de un componente llamado `Formik` que nos permite manejar formularios de forma más sencilla.

```js
import { Formik, Form, Field, ErrorMessage } from 'formik';

const App = () => {
  return (
    <Formik
      initialValues={{ nombre: '', apellido: '' }}
      validate={values => {
        const errors = {};
        if(!values.nombre) {
          errors.nombre = 'El nombre es obligatorio';
        }
        if(!values.apellido) {
          errors.apellido = 'El apellido es obligatorio';
        }

        if(values.nombre.length < 3) {
          errors.nombre = 'El nombre debe tener al menos 3 caracteres';
        }

        return errors;
      }}
      onSubmit={values => {
        alert(`Hola ${values.nombre} ${values.apellido}`);
      }}
    >
      <Form>
        <Field type="text" name="nombre" />
        <ErrorMessage name="nombre" component="div" />
        <Field type="text" name="apellido" />
        <ErrorMessage name="apellido" component="div" />
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
```

A diferencia de como lo estábamos haciendo anteriormente usando el Hook `useFormik`, con el componente `Formik` solo necesitamos pasarle las propiedades `initialValues`, `validate` y `onSubmit`. Dentro del componente `Formik` podemos usar los componentes `Form`, `Field` y `ErrorMessage` para manejar los campos del formulario y los mensajes de error.

### Componentes Field, Form y ErrorMessage

- `Field`: Es un componente que nos permite manejar los campos del formulario. Recibe un prop `name` que es el nombre del campo y un prop `type` que es el tipo del campo.
- `Form`: Es un componente que nos permite manejar el formulario. Dentro de este componente debemos poner los campos del formulario.
- `ErrorMessage`: Es un componente que nos permite manejar los mensajes de error. Recibe un prop `name` que es el nombre del campo y un prop `component` que es el componente que se muestra cuando hay un error.


### Propiedades del componte Field

- `name`: El nombre del campo.
- `type`: El tipo del campo.
- `as`: El tipo de campo que se va a renderizar. Por defecto, `Field` renderiza un `input`, pero podemos usar `as` para renderizar otro tipo de campo, como un `textarea` o un `select`.
- `component`: El componente que se va a renderizar. Por defecto, `Field` renderiza un `input`, pero podemos usar `component` para renderizar otro tipo de componente, como un `textarea` o un `select`.
- `validate`: Una función que valida el campo. Recibe el valor del campo y retorna un mensaje de error si el campo no es válido.
- `placeholder`: El texto que se muestra en el campo cuando está vacío.
- `value`: El valor del campo.
- `onChange`: La función que se ejecuta cuando el usuario cambia el valor del campo.
- `onBlur`: La función que se ejecuta cuando el usuario toca el campo y luego lo deja.
- `checked`: Indica si el campo está seleccionado. Solo se usa en campos de tipo `checkbox` y `radio`.
- `multiple`: Indica si el campo permite múltiples valores. Solo se usa en campos de tipo `select`.

### Componentes custom con el Hook useField

```js
import { Formik, Form, useField } from 'formik';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </div>
  );
};

const App = () => {
  return (
    <Formik
      initialValues={{ nombre: '', apellido: '' }}
      validate={values => {
        const errors = {};
        if(!values.nombre) {
          errors.nombre = 'El nombre es obligatorio';
        }
        if(!values.apellido) {
          errors.apellido = 'El apellido es obligatorio';
        }

        if(values.nombre.length < 3) {
          errors.nombre = 'El nombre debe tener al menos 3 caracteres';
        }

        return errors;
      }}
      onSubmit={values => {
        alert(`Hola ${values.nombre} ${values.apellido}`);
      }}
    >
      <Form>
        <MyTextInput
          label="Nombre"
          name="nombre"
          type="text"
        />
        <MyTextInput
          label="Apellido"
          name="apellido"
          type="text"
        />
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
```

En este caso, creamos un componente `MyTextInput` que recibe un prop `label` y un prop `...props`. Usamos el Hook `useField` para manejar los campos del formulario y los mensajes de error. `useField` recibe un objeto con las propiedades del campo y retorna un array con dos elementos, `field` y `meta`. `field` es un objeto con las propiedades del campo y `meta` es un objeto con los mensajes de error. Usamos `field` para manejar los campos del formulario y `meta` para manejar los mensajes de error. De esta forma podemos crear componentes custom para manejar los campos del formulario y los mensajes de error.

### Componente custom de Checkbox

```js
import { Formik, Form, useField } from 'formik';

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label>
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </div>
  );
};

const App = () => {
  return (
    <Formik
      initialValues={{ terminos: false }}
      validate={values => {
        const errors = {};
        if(!values.terminos) {
          errors.terminos = 'Debes aceptar los términos y condiciones';
        }
        return errors;
      }}
      onSubmit={values => {
        alert(`Terminos y condiciones aceptados`);
      }}
    >
      <Form>
        <MyCheckbox name="terminos">
          Acepto los términos y condiciones
        </MyCheckbox>
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
```

En este caso, creamos un componente `MyCheckbox` que recibe un prop `children` y un prop `...props`. Usamos el Hook `useField` para manejar los campos del formulario y los mensajes de error. `useField` recibe un objeto con las propiedades del campo y retorna un array con dos elementos, `field` y `meta`. `field` es un objeto con las propiedades del campo y `meta` es un objeto con los mensajes de error. Usamos `field` para manejar los campos del formulario y `meta` para manejar los mensajes de error. De esta forma podemos crear componentes custom para manejar los campos del formulario y los mensajes de error.

### Componente custom de Select

```js
import { Formik, Form, useField } from 'formik';

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </div>
  );
};

const App = () => {
  return (
    <Formik
      initialValues={{ color: '' }}
      validate={values => {
        const errors = {};
        if(!values.color) {
          errors.color = 'Debes seleccionar un color';
        }
        return errors;
      }}
      onSubmit={values => {
        alert(`Color seleccionado: ${values.color}`);
      }}
    >
      <Form>
        <MySelect label="Color" name="color">
          <option value="">-- Seleccione un color --</option>
          <option value="rojo">Rojo</option>
          <option value="verde">Verde</option>
          <option value="azul">Azul</option>
        </MySelect>
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
```

### Componente custom de Radio

```js
import { Formik, Form, useField } from 'formik';

const MyRadio = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'radio' });
  return (
    <div>
      <label>
        <input type="radio" {...field} {...props} />
        {label}
      </label>
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </div>
  );
};

const App = () => {
  return (
    <Formik
      initialValues={{ sexo: '' }}
      validate={values => {
        const errors = {};
        if(!values.sexo) {
          errors.sexo = 'Debes seleccionar un sexo';
        }
        return errors;
      }}
      onSubmit={values => {
        alert(`Sexo seleccionado: ${values.sexo}`);
      }}
    >
      <Form>
        <MyRadio label="Masculino" name="sexo" value="masculino" />
        <MyRadio label="Femenino" name="sexo" value="femenino" />
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
```

## Styled Components

**Styled Components** es una librería que nos permite escribir CSS dentro de nuestros componentes de React. Con Styled Components, podemos crear estilos de forma más sencilla y mantenible, ya que los estilos están asociados a los componentes y no a las clases de CSS. Además, Styled Components nos permite usar JavaScript para definir los estilos, lo que nos permite crear estilos dinámicos y reutilizables.

Para usar Styled Components, primero debemos instalarlo.

```bash
npm install styled-components
```

### Creando un componente con Styled Components

```js
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const App = () => {
  return (
    <Button>Enviar</Button>
  );
}

export default App;
```

La sintaxis de Styled Components consiste en declarar un componente con la función `styled.SomeElement` y pasarle un template string con los estilos del componente. En este caso, creamos un componente `Button` que es un botón con un fondo azul, texto blanco, padding de 10px en vertical y 20px en horizontal, sin borde, con bordes redondeados y un cursor de tipo pointer.

### Composición de componentes

```js
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background-color: green;
`;

const App = () => {
  return (
    <div>
      <Button>Enviar</Button>
      <PrimaryButton>Enviar</PrimaryButton>
    </div>
  );
}

export default App;
```

En este caso, creamos un componente `PrimaryButton` que es un botón con un fondo verde. Para hacer esto, usamos la sintaxis `styled(SomeComponent)` y pasamos el componente que queremos extender. De esta forma podemos crear componentes que heredan los estilos de otros componentes. La propiedad `background-color: green;` sobrescribe la propiedad `background-color: blue;` del componente `Button` y todos los demás estilos se mantienen.

### Propiedades dinámicas

```js
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'green'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const App = () => {
  return (
    <div>
      <Button primary>Enviar</Button>
      <Button>Enviar</Button>
    </div>
  );
}

export default App;
```

Creamos un componente `Button` que recibe una prop `primary` y cambia el color de fondo del botón dependiendo del valor de la prop. Para hacer esto, usamos la sintaxis `${props => props.primary ? 'blue' : 'green'}` y pasamos una función que recibe las propiedades del componente y retorna el valor de la propiedad `background-color`. De esta forma podemos crear componentes con estilos dinámicos. En este caso, el botón con la prop `primary` tiene un fondo azul y el botón sin la prop `primary` tiene un fondo verde.

### Cambiando las esquitas renderizadas

```js
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: ${props => props.rounded ? '50px' : '5px'};
  cursor: pointer;
`;

const App = () => {
  return (
    <div>
      <Button rounded as="a" href="#">Enviar</Button>
      <Button>Enviar</Button>
    </div>
  );
}

export default App;
```

Podemos hacer que un componente se renderice como otro componente usando la propiedad `as`. En este caso, el botón con la prop `rounded` se renderiza como un enlace (`a`) y tiene las esquinas redondeadas, mientras que el botón sin la prop `rounded` se renderiza como un botón y tiene las esquinas cuadradas.

### Agregar estilos a cualquier componente

```js
import styled from 'styled-components';

const Link = ({ className, ...props }) => {
  return (
    <a className={className} {...props} />
  );
}

const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;
`;

const App = () => {
  return (
    <StyledLink href="#">Enlace</StyledLink>
  );
}

export default App;
```

Podemos agregar estilos a cualquier componente usando la propiedad `className` y pasándola al componente que queremos estilizar. En este caso, creamos un componente `Link` que recibe una prop `className` y un prop `...props` y renderiza un enlace (`a`) con las propiedades que recibe. Luego creamos un componente `StyledLink` que recibe el componente `Link` y le pasamos un template string con los estilos del enlace. De esta forma podemos agregar estilos a cualquier componente.

### Pseudo elementos y selectores

```js
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: green;
  }

  &:active {
    background-color: red;
  }

  &::before {
    content: '🚀';
    margin-right: 10px;
  }
`;

const App = () => {
  return (
    <Button>Enviar</Button>
  );
}

export default App;
```

Podemos agregar estilos a los pseudo elementos y selectores de un componente usando la sintaxis `&:pseudo-element` y `&:selector`. En este caso, agregamos estilos al pseudo elemento `::before` y a los selectores `:hover` y `:active` del botón. De esta forma podemos agregar estilos a los pseudo elementos y selectores de un componente. En este caso, el botón tiene un emoji de cohete antes del texto, un fondo verde cuando el usuario pasa el mouse sobre el botón y un fondo rojo cuando el usuario hace clic en el botón.

### Agregar propiedades

```js
import styled from 'styled-components';

const Input = styled.input.attrs(props => ({
  type: 'text',
  size: props.size || '1em',
}))`
  border: 2px solid palevioletred;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

const App = () => {
  return (
    <Input placeholder="Escribe algo..." size="2em" />
  );
}

export default App;
```

Podemos agregar propiedades estáticas a un componente usando la propiedad `attrs` y pasándole una función que recibe las propiedades del componente y retorna un objeto con las propiedades estáticas. En este caso, creamos un componente `Input` que recibe una prop `size` y un prop `...props` y le pasamos un template string con los estilos del campo de texto. Luego usamos la propiedad `attrs` para agregar la propiedad `type` y la propiedad `size` al campo de texto.

### Animaciones

```js
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: blue;
  animation: ${rotate} 1s linear infinite;
`;

const App = () => {
  return (
    <Spinner />
  );
}

export default App;
```

Podemos crear animaciones usando la función `keyframes` y pasándole un template string con los estilos de la animación. En este caso, creamos una animación `rotate` que rota un elemento de 0 a 360 grados. Luego creamos un componente `Spinner` que es un círculo con un borde azul que rota de forma infinita. De esta forma podemos crear animaciones en Styled Components.

### Consideraciones de seguridad

Como styled components nos permite inyectar código javascript en nuestros estilos, corremos el riesgo de que un atacante pueda inyectar código malicioso en nuestros estilos. Para prevenir esto debemos asegurarnos de sanitizer los estilos que estamos usando, sobre todo si esto viene de alguna fuente externa.

## Optimizar el rendimiento en React

Supongamos que tenemos una aplicación de React con dos inputs , un botón y una lista, esta aplicación permite ingresar un nombre, un apellido y mediante el botón agregar el nombre y apellido a la lista. Si no optimizamos nada, cada vez que agreguemos un nuevo item a la lista, React vuelve a renderizar cada uno de los componentes, en una aplicación pequeña puede que no sea problema, pero en una aplicación grande, el hecho de que se rendericen todos los componentes cada vez que se agrega un nuevo item a la lista puede afectar el rendimiento de la aplicación.

React lo que hace es comparar el DOM actual de la aplicación con el DOM virtual que el maneja, de esta manera muestra en la vista solo los cambios que se han hecho, pero la comparación de estos dos DOM puede ser costosa en términos de rendimiento, para optimizar esto le podemos ayudar a react a que no tenga que comparar todos los componentes cada vez que se haga un cambio en la aplicación.

### ¿Como funciona React?

El DOM (Document Object Model) es una representación de la estructura de un documento HTML, CSS y JavaScript, el DOM es una estructura de árbol, donde cada elemento del documento es un nodo del árbol, React crea una representación virtual del DOM, que es una copia del DOM real, pero en memoria, esta representación virtual es un objeto JavaScript que contiene la estructura de la aplicación, cada vez que se hace un cambio en la aplicación, React compara el DOM virtual con el DOM real y solo muestra los cambios que se han hecho. React hace esto de forma eficiente, pero si la aplicación es grande, la comparación de los dos DOM puede ser costosa en términos de rendimiento.

En aplicaciones grandes puede que algún nodo del árbol de componentes tenga un renderizado costoso por lo que va a demorar mucho en pintar ese nodo en pantalla, si no evitamos que se renderice ese nodo costoso, React va a tener que renderizar todos los nodos anteriores a ese nodo costoso, lo que va a afectar el rendimiento de la aplicación.

### React.memo

`React.memo` es una función que nos permite memorizar un componente, es decir, React guarda una copia del componente en memoria y solo lo renderiza si las propiedades del componente han cambiado. De esta forma, React no tiene que comparar el componente con el DOM virtual cada vez que se hace un cambio en la aplicación, lo que mejora el rendimiento de la aplicación.

```js
import { memo } from 'react';

const Item = memo(({ nombre, apellido }) => {
  return (
    <li>{nombre} {apellido}</li>
  );
});

export default Item;
```

### ¿Que es la memoization?

La memoization es una técnica de optimización que consiste en guardar el resultado de una función en memoria y retornar el resultado guardado si la función se llama con los mismos argumentos. De esta forma, si la función se llama con los mismos argumentos, la función no tiene que ejecutarse de nuevo, lo que mejora el rendimiento de la aplicación.

### memo con propiedades children

```js
import { isEqual } from 'lodash';
import { memo } from 'react';

const Item = memo(({ children }) => {
  return (
    <li>{children}</li>
  );
}, isEqual);

export default Item;
```

Las propiedades children pueden tener un problema con `React.memo`, ya que estas no se le pasan a los componentes como elementos individuales, sino que se pasan como un solo elemento, por lo que si se le pasa un array de elementos, `React.memo` va a comparar el array completo y no los elementos individuales, dado que cuando comparamos dos arrays en JavaScript, se comparan las referencias de los arrays y no los elementos de los arrays, por lo que `React.memo` va a renderizar el componente aunque los elementos del array sean iguales. Para solucionar esto, podemos usar la función `isEqual` de la librería `lodash`, que compara los elementos de un array y no las referencias de un array.

### useCallback para memoizar funciones

`useCallback` es un Hook que nos permite memoizar una función, es decir, guardar una copia de la función en memoria y solo crear una nueva copia si las dependencias de la función han cambiado. De esta forma, si la función se llama con las mismas dependencias, React no tiene que crear una nueva copia de la función, lo que mejora el rendimiento de la aplicación.

```js
import { useCallback } from 'react';
import { useState } from 'react';

const App = () => {
  const [valores, setValores] = useState([]);
  const handleSubmit = useCallback((values) => {
    setValores(data => ([...data, values]));
  }, []);
}

export default App;
```

Funciones comunes como los handlers de eventos de los componentes, se crean cada vez que se renderiza el componente, lo que puede afectar el rendimiento de la aplicación, `useCallback` nos permite memoizar estas funciones y solo crear una nueva copia si las dependencias de la función han cambiado.

### useMemo para memoizar valores

`useMemo` es un Hook que nos permite memoizar un valor, es decir, guardar una copia del valor en memoria y solo crear un nuevo valor si las dependencias del valor han cambiado. De esta forma, si el valor se llama con las mismas dependencias, React no tiene que crear un nuevo valor, lo que mejora el rendimiento de la aplicación.

```js
import { useMemo } from 'react';

const App = () => {
  const iterador = 50000000;
  const memoized = useMemo(() => {
    let total = 0;
    for(let i = 0; i < iterador; i++) {
      total = total * iterador;
    }

    return total;
  }, [iterador]);
}

export default App;
```

Valores computados como los resultados de operaciones matemáticas, se crean cada vez que se renderiza el componente, lo que puede afectar el rendimiento de la aplicación, `useMemo` nos permite memoizar estos valores y solo crear un nuevo valor si las dependencias del valor han cambiado. Si hay que ejecutar alguna operación costosa, se puede usar `useMemo` para memoizar el valor y mejorar el rendimiento de la aplicación.

## Context

Context es una forma en la que podemos pasar propiedades en un árbol de componentes de arriba hacia abajo sin tener que pasar estas propiedades por cada uno de los componentes del árbol hasta llegar al que queremos.

### Crear un contexto

```js
import { createContext, useContext } from 'react';

const Context = createContext('default');

const Provider = ({ children }) => {
  return (
    <Context.Provider value={'hola'}>
      {children}
    </Context.Provider>
  );
}

const Component = () => {
  const value = useContext(Context);
  return (
    <p>{value}</p>
  );
}

const App = () => {
  return (
    <Provider>
      <Component />
    </Provider>
  );
}

export default App;
```

Creamos el contexto con el el Hook `createContext`, este Hook debe tener un valor por defecto, puede ser cualquier tipo de dato, en este caso es un string. Luego creamos un componente `Provider` que recibe un prop `children` y retorna el componente `Context.Provider` con el valor que queremos pasar a los componentes hijos. Luego creamos un componente `Component` que recibe el valor del contexto con el Hook `useContext` y lo muestra en pantalla. Finalmente, envolvemos el componente `Component` con el componente `Provider` para pasarle el valor del contexto.

### Actualizar el estado de un Context

Puede que queramos actualizar el estado de un context desde un componente hijo y que este cambio se refleje en los demás componentes hijos, para hacer esto, debemos usar el Hook `useState` y el Hook `useContext`.

```js
import { createContext, useContext, useState } from 'react';

const Context = createContext({ valor: false, toggle: () => {} });

const Provider = ({ children }) => {
  const [valor, setValor] = useState(false);
  const value = { valor, toggle: () => setValor(!valor) };
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

const Component = () => {
  const { valor, toggle } = useContext(Context);
  return (
    <div>
      <p>{valor ? 'Verdadero' : 'Falso'}</p>
      <button onClick={toggle}>Cambiar</button>
    </div>
  );
}

const App = () => {
  return (
    <Provider>
      <Component />
    </Provider>
  );
}

export default App;
```

De esta forma, apoyándonos en el Hook `useState` y el Hook `useContext`, podemos actualizar el estado de un contexto desde un componente hijo y que este cambio se refleje en los demás componentes hijos.

### El problema de Context

El problema de Context es que cada vez que se hace un cambio en el contexto, todos los componentes que están suscritos al contexto se vuelven a renderizar, lo que puede afectar el rendimiento de la aplicación, tampoco se puede memoizar el contexto ya que el provider recibe en el prop `value` un objeto, y los objetos en JavaScript se comparan por referencia y no por valor, por lo que si se cambia un valor del objeto, React va a renderizar todos los componentes que están suscritos al contexto.

En aplicaciones grandes, el hecho de que todos los componentes que están suscritos al contexto se vuelvan a renderizar cada vez que se hace un cambio en el contexto puede afectar el rendimiento de la aplicación. Por esto debemos usar Context con precaución y solo en casos donde sea necesario como por ejemplo para manejar datos que no cambian mucho o que no afectan a muchos componentes, datos como el tema de la aplicación, el idioma de la aplicación, el usuario autenticado, etc.

### Context en componentes de clase

```js
import React, { createContext } from 'react';

const Context = createContext('default');

class Provider extends React.Component {
  state = {
    valor: false,
  }

  toggle = () => {
    this.setState({ valor: !this.state.valor });
  }

  render() {
    const value = { valor: this.state.valor, toggle: this.toggle };
    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Component = () => {
  return (
    <Context.Consumer>
      {({ valor, toggle }) => (
        <div>
          <p>{valor ? 'Verdadero' : 'Falso'}</p>
          <button onClick={toggle}>Cambiar</button>
        </div>
      )}
    </Context.Consumer>
  );
}

const App = () => {
  return (
    <Provider>
      <Component />
    </Provider>
  );
}

export default App;
```

En componentes de clase, no podemos usar Hooks, por lo que debemos usar el método `Consumer` del contexto para acceder al valor del contexto. El método `Consumer` recibe una función que recibe el valor del contexto y retorna el componente que queremos renderizar. De esta forma, podemos acceder al valor del contexto en componentes de clase.

### Consumir múltiples contextos

```js
import { createContext, useContext } from 'react';

const Context1 = createContext('default1');
const Context2 = createContext('default2');

const Provider = ({ children }) => {
  return (
    <Context1.Provider value={'hola'}>
      <Context2.Provider value={'mundo'}>
        {children}
      </Context2.Provider>
    </Context1.Provider>
  );
}

const Component = () => {
  const value1 = useContext(Context1);
  const value2 = useContext(Context2);
  return (
    <p>{value1} {value2}</p>
  );
}

const App = () => {
  return (
    <Provider>
      <Component />
    </Provider>
  );
}

export default App;
```

Podemos consumir múltiples contextos en un componente usando el Hook `useContext` y pasándole el contexto que queremos consumir. En este caso, creamos dos contextos, `Context1` y `Context2`, y los consumimos en el componente `Component`. De esta forma, podemos consumir múltiples contextos en un componente.