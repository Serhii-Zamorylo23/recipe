import './App.css';
import Recipe from './Components/recipe/recipe';
import React from 'react';
import recipejson from './Components/recipe.json'
function App() {
  return (
    <Recipe recipes={recipejson}/>
  );
}

export default App;
