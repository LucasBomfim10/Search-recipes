import React from 'react';
import './App.css';

import RecipeSearch from './components/RecipeSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Projeto de Receitas</h1>
      </header>
      <main>
        <RecipeSearch />
      </main>
    </div>
  );
}

export default App;
