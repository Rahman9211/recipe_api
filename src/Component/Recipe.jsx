import React from 'react';

function Recipe({ recipe }) {
  if (!recipe) return null;

  return (
    <div className="recipe-card">
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} />
      <p><strong>Calories:</strong> {Math.round(recipe.calories)}</p>
      <a href={recipe.url} target="_blank" rel="noreferrer">View Recipe</a>
    </div>
  );
}

export default Recipe;
