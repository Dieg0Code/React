import { Component } from 'react';

class App extends Component {
  state = {
    valor: 3
  }
  render() {
    console.log(this.state.valor);
    return(
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

export default App;