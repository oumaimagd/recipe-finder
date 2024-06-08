// RecipeSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { filterByCuisine } from "../redux/actions";
import CuisinesData from "./cuisinesData";

const RecipeSlider = () => {
  const dispatch = useDispatch();

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleCuisineClick = (cuisineType) => {
    dispatch(filterByCuisine(cuisineType));
  };

  return (
    <div className="categories-slider">
      <h2>Categories Cuisine</h2>
      <Slider {...settings}>
        {CuisinesData.map((cuisine) => (
          <div
            key={cuisine.type}
            className="slider-item"
            onClick={() => handleCuisineClick(cuisine.type)}
            data-cuisine={cuisine.type}
          >
            <img
              src={cuisine.image}
              alt={cuisine.type}
              className="slider-image"
            />
            <div className="slider-item-content">
              <h3 className="cuisine-title">{cuisine.type}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecipeSlider;
