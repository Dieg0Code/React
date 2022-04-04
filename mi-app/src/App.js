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