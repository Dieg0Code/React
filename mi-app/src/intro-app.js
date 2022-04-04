import logo from './logo.svg';
// import './App.css';
import './main.css';


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
    <li className='clase-li'>{children} = {estado}</li>
  );
}

const App = () => {
  const valor = 'Waton';
  return (
    <ul className="clase-li">
      <LI estado="feliz">valor de li</LI>
    </ul>
  );
}

export default App;
