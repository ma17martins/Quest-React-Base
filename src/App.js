import TextFormat from './components/uppercase/TextFormat';
import './components/uppercase/uppercase.css';
import Button from './components/button/Button';
import React from 'react';
function App() {
  return (
    <div className="App">
      <TextFormat text="Texto colorido com as letras maiúsculas" />
      <Button label="Baixar CV" />
    </div>
  )
}

export default App;

