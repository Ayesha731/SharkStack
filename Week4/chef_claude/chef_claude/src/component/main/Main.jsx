import React from "react";
import { useState } from "react";
import "./Main.css";
const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmitted(event) {
    // event.preventDefault();
    // console.log("The form is submitted!!");
    // const formData = new FormData(event.currentTarget);
    // const newIngredient = formData.get("ingredient");
    // console.log(newIngredient);
    // ingredient.push(newIngredient);
    // console.log(ingredient);
    // setIngredient((prevIngredient) => [
    //   ...prevIngredient,
    //   ingredient[prevIngredient.length],
    // ]);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <>
      <main>
        <form className="add-ingredient-form" onSubmit={handleSubmitted}>
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
          />
          <button>Add ingredient</button>
        </form>
        <ul>{ingredientsListItems}</ul>
      </main>
    </>
  );
};

export default Main;
