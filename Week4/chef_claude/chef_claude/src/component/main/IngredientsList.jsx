import React from "react";

const IngredientsList = (props) => {
  console.log(props);
  return (
    <>
      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {props.ingredientList}
        </ul>
        {props.ingredient.length >= 4 ? (
          <div className="get-recipe-container">
            <div ref={props.ref}>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.getRecipe}>Get a recipe</button>
          </div>
        ) : null}
      </section>
    </>
  );
};

export default IngredientsList;
