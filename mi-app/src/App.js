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

class App extends Component {
  state = {
    valor: 3
  }
  render() {
    console.log(this.state.valor);
    return(
      <div>
        <p>Hola</p>
        <Button perro='waton'/>
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