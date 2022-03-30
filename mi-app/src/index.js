import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const LI = ({ children, estado, casa, edad }) => { 
//   console.log(casa, edad);
//   return (
//     <li>{children} estoy {estado}</li>
//   )
// }
//<p>Hello World</p>
// const X = () =>
//   <ul>
//     <LI estado={'feliz'}
//     casa={false}
//     edad={26}
//     >Chanchito</LI>
//     <LI estado={"Triste"}>Chanchito</LI>
//     <LI estado={"Emocionado"}>Felipe</LI>
//   </ul>

// ReactDOM.render(
//   <X />, document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
