import Die from "./assets/diecomponent/Die";
import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";
function App() {
  const [numbers, setNumbers] = useState(() => generateAllNewDice());
  const buttonRef = useRef(null);
  console.log(buttonRef);

  const gameWon =
    numbers.every((die) => die.isHeld) &&
    numbers.every((die) => die.value === numbers[0].value);

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);
  // if (
  //   numbers.every((die) => die.isHeld) &&
  //   numbers.every((die) => die.value === numbers[0].value)
  // ) {
  //   console.log("Game won!");
  //   return (gameWon = true);
  // }

  function generateAllNewDice() {
    //1st method******************
    // const newDice = []
    // for (let i = 0; i < 10; i++) {
    //     const rand = Math.ceil(Math.random() * 6)
    //     newDice.push(rand)
    // }
    //   return newDice
    console.log("generatedAllNewDice is called");
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }
  console.log(generateAllNewDice());

  //map over dice
  const arrayOfDie = numbers.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      held={dieObj.isHeld}
      // id={dieObj.id}
      hold={() => hold(dieObj.id)}
    />
  ));
  console.log(arrayOfDie);

  function hold(id) {
    console.log(id);
    setNumbers((oldDice) =>
      oldDice.map((dice) =>
        dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice
      )
    );
  }
  function handleDiceNumbers() {
    if (!gameWon) {
      setNumbers((oldDice) =>
        oldDice.map((dice) =>
          dice.isHeld ? dice : { ...dice, value: Math.ceil(Math.random() * 6) }
        )
      );
    } else {
      setNumbers(generateAllNewDice);
    }
  }

  return (
    <main>
      {gameWon && <ReactConfetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <div className="congrats-message">
            🎉 Congratulations! You won the game! 🥳✨
            <br />
            Press <strong>“New Game”</strong> to play again.
          </div>
        )}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{arrayOfDie}</div>
      <button ref={buttonRef} className="btn" onClick={handleDiceNumbers}>
        {gameWon ? "New Game" : "Roll Down"}
      </button>
    </main>
  );
}

export default App;
