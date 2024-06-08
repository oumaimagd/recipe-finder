import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";

function RecipeCard({ recipe }) {
  const { id, title, Image, ingredients } = recipe;

  return (
    <div className="recipe-list-item group">
      <div className="recipe-item-top">
        <LazyLoadImage
          src={Image}
          className="recipe-item-img group-hover:scale-125"
          alt={title}
        />
      </div>
      <div className="recipe-item-bottom">
        <div className="p-4">
          <h3 className="recipe-item-name">{title}</h3>
          <ul className="recipe-item-info">
            {ingredients.slice(0, 3).map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <Link to={`/recipe/${id}`} className="read-btn">
          Read Full Recipe <AiOutlineArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
