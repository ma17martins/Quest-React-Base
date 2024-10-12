import TextFormat from './components/StyleText/index.jsx';
import './components/StyleText/index.css';
import Button from './components/AlertButton/index';
import React from 'react';
function App() {
  return (
    <>
      <TextFormat text="Texto colorido com as letras maiúsculas" />
      <Button label="Baixar CV" />
    </>
  )
}

export default App;

