import Array from "./component/array/Array";
import Counter from "./component/counter/Counter";
import Form from "./component/form/Form";
import Header from "./component/header/Header";
import Jokes from "./component/joke/Jokes";
import Main from "./component/main/Main";
import Object from "./component/objectInState/Object";
import Tertionary from "./component/tertionary/Tertionary";
import jokesData from "./component/joke/jokesData.js";
import Sound from "./component/soundpad/Sound.jsx";

function App({ darkMode }) {
  const jokeElements = jokesData.map((joke) => {
    return (
      <Jokes key={joke.id} setup={joke.setup} punchline={joke.punchline} />
    );
  });
  return (
    <>
      <Header />
      <Main />
      {/* <Counter /> */}
      {/* <Tertionary /> */}
      {/* <Array /> */}
      {/* <Object /> */}
      {/* <Form /> */}
      {/* {jokeElements} */}
      {/* <Sound darkMode={darkMode} /> */}
    </>
  );
}

export default App;
