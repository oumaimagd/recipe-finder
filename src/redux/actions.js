export const SEARCH_RECIPES = "SEARCH_RECIPES";
export const FILTER_BY_CUISINE = "FILTER_BY_CUISINE";

export const searchRecipes = (query) => ({
  type: SEARCH_RECIPES,
  payload: query,
});

export const filterByCuisine = (cuisine) => ({
  type: FILTER_BY_CUISINE,
  payload: cuisine,
});
