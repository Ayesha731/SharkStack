import Entry from "./component/entry/Entry";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import japan from "./assets/japan.jpg";
import data from "./component/entry/data";
function App() {
  const entryElements = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        // img={entry.img}
        // country={entry.country}
        // location={entry.googleMapsLink}
        // title={entry.title}
        // date={entry.dates}
        // description={entry.text}
        {...entry}
      />
    );
  });
  return (
    <>
      <div className="container">
        <Header />
        <main className="container">{entryElements}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
