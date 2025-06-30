import React from "react";
import { useState } from "react";
import "./Main.css";
const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  // function handleSubmitted(formData) {
  //   //1st method************************************
  //   // event.preventDefault();
  //   // console.log("The form is submitted!!");
  //   // const formData = new FormData(event.currentTarget);
  //   // const newIngredient = formData.get("ingredient");
  //   // console.log(newIngredient);
  //   // ingredient.push(newIngredient);
  //   // console.log(ingredient);
  //   // setIngredient((prevIngredient) => [
  //   //   ...prevIngredient,
  //   //   ingredient[prevIngredient.length],
  //   // ]);
  //   //2nd method********************************
  //   // event.preventDefault();
  //   // const formData = new FormData(event.currentTarget);
  //   // const newIngredient = formData.get("ingredient");
  //   // setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  //   //3rd method***************************************
  //   const newIngredient = formData.get("ingredient"); //in get function the name of the input should be used
  //   setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  //   console.log(newIngredient);
  // }
  function handleSubmitted(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    event.target.reset(); // optional: clears input
  }
  return (
    <>
      <main>
        <form onSubmit={handleSubmitted} className="add-ingredient-form">
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
          />
          <button type="submit">Add ingredient</button>
        </form>
        <ul>{ingredientsListItems}</ul>
      </main>
    </>
  );
};

export default Main;
