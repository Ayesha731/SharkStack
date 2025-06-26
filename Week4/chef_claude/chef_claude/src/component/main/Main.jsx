import React from "react";
import "./Main.css";
const Main = () => {
  const ingredient = ["potato", "onion", "chilli"];
  const listIngredient = ingredient.map((x, index) => <li key={index}>{x}</li>);
  function handleSubmitted(event) {
    event.preventDefault();
    console.log("The form is submitted!!");
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    console.log(newIngredient);
    ingredient.push(newIngredient);
    console.log(ingredient);
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
        <ul>{listIngredient}</ul>
      </main>
    </>
  );
};

export default Main;
