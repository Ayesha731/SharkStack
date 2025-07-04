import React from "react";
import { useState } from "react";
import "./Main.css";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai";
const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  // const [recipeShown, setRecipeShown] = useState(false);
  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    console.log(recipeMarkdown);
    setRecipe(recipeMarkdown);
  }
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
  // function handleSubmitted(event) {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   const newIngredient = formData.get("ingredient");
  //   setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  //   event.target.reset(); // optional: clears input
  // }
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  // function handleRecpieShown() {
  //   setRecipeShown((prevRecipe) => !prevRecipe);
  // }
  return (
    <>
      <main>
        <form action={addIngredient} className="add-ingredient-form">
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
          />
          <button type="submit">Add ingredient</button>
        </form>
        {ingredients.length > 0 ? (
          <IngredientsList
            ingredientList={ingredientsListItems}
            ingredient={ingredients}
            // RecpieHandle={handleRecpieShown}
            getRecipe={getRecipe}
          />
        ) : null}
        {/* ****************************************************************** */}
        {recipe && <ClaudeRecipe recipe={recipe} />}
      </main>
    </>
  );
};

export default Main;
