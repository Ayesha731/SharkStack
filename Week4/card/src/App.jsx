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
          fclass="Business"
          description="The city that never sleeps, full of lights, life, and landmarks. 🗽"
          bgImage={NewYork}
          tag={689}
          flight="BJK"
        />
        <Card
          title="England"
          fclass="Economy"
          description="Classic charm, royal heritage, and rainy-day beauty. 👑🌧️"
          bgImage={uk}
          tag={237}
          flight="SKH"
        />
        <Card
          title="Turkey"
          fclass="Lower AC"
          description="Jihan's Turkey--A magical blend of Eastern charm and Western modernity. 🕌🍽️"
          bgImage={turkey}
          tag={869}
          flight="ACG"
        />
        <Card
          title="Saudi Arab"
          fclass="Polar"
          description="A land of deserts, devotion, and dazzling transformation. 🕋🌴"
          bgImage={saudi}
          tag={876}
          flight="DEV"
        />
        <Card
          title="Italy"
          fclass="First Class"
          description=" Where history, art, and delicious food meet around every corner. 🍕🎨"
          bgImage={italy}
          tag={379}
          flight="REW"
        />
        <Card
          title="Iran"
          fclass="Business Class"
          description="Ancient wonders and rich Persian culture wrapped in warm hospitality. 🏛️🧿"
          bgImage={iran}
          tag={234}
          flight="ABC"
        />
        <Card
          title="Palestine"
          fclass="Economy"
          description="A land of deep history, enduring spirit, and sacred stories. 🕊️🕌"
          bgImage={palestine}
          tag={530}
          flight="JKL"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
