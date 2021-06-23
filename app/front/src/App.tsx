import React from 'react';
import ListMessages from './pages/ListMessages';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Envio de mensagens via
        </p>
        <a
          className="App-link"
          href="https://customer.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          curstomer.io
        </a>
      </header>
      <ListMessages title="Mensagens">

      </ListMessages>
    </div>
  );
}

export default App;
