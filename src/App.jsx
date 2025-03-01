import Recipe from 'Components/recipe/recipe.jsx';
import React from 'react';
import recipejson from './Components/recipe.json'
export const App = () => {
  return (
    <Recipe recipes={recipejson} />
  );
};
