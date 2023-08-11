import React, { useState } from "react";
import "./RecipeSearch.css";

const RecipeSearch = () => {
  const [recipeName, setRecipeName] = useState("");
  const [recipe, setRecipe] = useState(null);

  const fetchRecipe = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`
      );
      const data = await response.json();
      console.log("Dados da receita:", data); // Exibe os dados da receita no console

      if (data.meals) {
        setRecipe(data.meals[0]);
      } else {
        setRecipe(null);
      }
    } catch (error) {
      console.error("Erro ao buscar receita:", error);
    }
  };

  return (
    <div className="recipe-search">
      <h2>Pesquisar Receitas</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Digite o nome da receita"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
        <button onClick={fetchRecipe}>Buscar</button>
      </div>
      {recipe && (
        <div className="recipe-result">
          <h3>{recipe.strMeal}</h3>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <p>{recipe.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeSearch;
