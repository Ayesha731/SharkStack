import Card from "./component/cards/Card.jsx";
import Header from "./component/header/Header.jsx";
import Footer from "./component/footer/Footer.jsx";
import NewYork from "./assets/a.jpg";
import turkey from "./assets/turkey.jpg";
import uk from "./assets/uk.jpg";
import italy from "./assets/room.jpg";
import iran from "./assets/iran.jpg";
import palestine from "./assets/palestine.jpg";
import saudi from "./assets/saudi.jpg";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Card
          title="New York"
          description="The city that never sleeps, full of lights, life, and landmarks. 🗽"
          bgImage={NewYork}
          tag={689}
        />
        <Card
          title="England"
          description="Classic charm, royal heritage, and rainy-day beauty. 👑🌧️"
          bgImage={uk}
          tag={237}
        />
        <Card
          title="Turkey"
          description="Jihan's Turkey--A magical blend of Eastern charm and Western modernity. 🕌🍽️"
          bgImage={turkey}
          tag={869}
        />
        <Card
          title="Saudi Arab"
          description="A land of deserts, devotion, and dazzling transformation. 🕋🌴"
          bgImage={saudi}
          tag={876}
        />
        <Card
          title="Italy"
          description=" Where history, art, and delicious food meet around every corner. 🍕🎨"
          bgImage={italy}
          tag={379}
        />
        <Card
          title="Iran"
          description="Ancient wonders and rich Persian culture wrapped in warm hospitality. 🏛️🧿"
          bgImage={iran}
          tag={234}
        />
        <Card
          title="Palestine"
          description="A land of deep history, enduring spirit, and sacred stories. 🕊️🕌"
          bgImage={palestine}
          tag={530}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
