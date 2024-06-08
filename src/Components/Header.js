import React from "react";
import { useDispatch } from "react-redux";
import { searchRecipes } from "../redux/actions";
import SearchBox from "./SearchBox";
import RecipeSlider from "./RecipeSlider";

function Header() {
  const dispatch = useDispatch();

  const handleSearch = (query) => {
    dispatch(searchRecipes(query));
  };

  return (
    <header>
      <div className="navbar-brand-wrapper">
        <div className="container">
          <img
            src={
              "https://raw.githubusercontent.com/prabinmagar/recipe-app-with-reactjs-and-redux-edamam-api/master/src/assets/images/logo.png"
            }
            alt="site logo"
            width={60}
          />
          <p className="navbar-brand-text">
            find<span className="text-orange">Recipe.</span>
          </p>
        </div>
      </div>

      <div className="header-slider">
        <div className="slider-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlUw2Z6b4Ox_dFI2pVaeKDRGeXEe3lA7ekw&s"
            alt="Slider"
          />
          <div className="slider-item-content">
            <h2>Cooking, Simplified</h2>
            <p>
              The ultimate home cooking tool to get you inspired and organized
              in the kitchen.
            </p>
            <SearchBox onSearch={handleSearch} />
          </div>
        </div>
      </div>

      <RecipeSlider />
    </header>
  );
}

export default Header;
