import { SEARCH_RECIPES, FILTER_BY_CUISINE } from "./actions";
import recipesData from "../Components/recipesData";

const initialState = {
  recipes: recipesData,
  filteredRecipes: recipesData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RECIPES:
      const query = action.payload.toLowerCase();
      return {
        ...state,
        filteredRecipes: state.recipes.filter(
          (recipe) =>
            recipe.title.toLowerCase().includes(query) ||
            recipe.ingredients.some((ingredient) =>
              ingredient.toLowerCase().includes(query)
            )
        ),
      };
    case FILTER_BY_CUISINE:
      const cuisine = action.payload;
      return {
        ...state,
        filteredRecipes: state.recipes.filter(
          (recipe) => recipe.cuisine === cuisine
        ),
      };
    default:
      return state;
  }
};

export default reducer;
