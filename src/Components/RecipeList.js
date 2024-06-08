import React from "react";
import { useSelector } from "react-redux";
import RecipeCard from "./RecipeCard";

function RecipeList() {
  const recipes = useSelector((state) => state.filteredRecipes);

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
