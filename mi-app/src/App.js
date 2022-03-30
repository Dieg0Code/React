import logo from './logo.svg';
import './App.css';

const LI = ({ children, estado }) => {
  return (
    <li className='clase-li'>{children} = {estado}</li>
  );
}

const App = () => {
  const valor = 'Waton';
  return (
    <ul>
      <LI estado="feliz">valor de li</LI>
    </ul>
  );
}

export default App;
