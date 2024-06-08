import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineCheckSquare } from "react-icons/ai";

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useSelector((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <main className="recipe-single-page custom-min-h pt-[4px]">
      <section className="recipe-single">
        <div className="container recipe-single-top">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="back-btn flex items-center font-semibold mb-4"
          >
            <BsArrowLeft className="me-2" /> Go Back
          </button>

          <h3 className="recipe-single-name">{recipe.title}</h3>

          <div className="recipe-content flex">
            <div className="recipe-left mr-8">
              <div className="recipe-left-img-wrapper">
                <img src={recipe.Image} alt={recipe.title} />
              </div>
            </div>

            <div className="recipe-block ingredients">
              <p className="block-title text-lg">Ingredients:</p>
              <ul className="block-list">
                {recipe.ingredients?.map((ingredient, idx) => (
                  <li key={idx} className="block-list-item">
                    <AiOutlineCheckSquare className="text-jet" size={22} />
                    <div>
                      <p className="font-semibold">{ingredient}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="container recipe-single-bottom">
          <div className="recipe-video">
            <iframe
              title={recipe.title}
              width="560"
              height="315"
              src={recipe.video}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RecipeDetail;
