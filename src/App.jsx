import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./style.css";
import Card from "./components/card";
import cardData from "./components/CardData";

function App() {
  let result = cardData.map((cardItem) => {
    // console.log(cardItem.PhoneNo)
    return (
      <Card
        cardContent={{
          imgSrc: cardItem.imgSrc,
          PlaceName: cardItem.PlaceName,
          PlaceDescription: cardItem.PlaceDescription,
        }}
      />
    );
  });

  return (
    <div>
      <Header />
      <Hero />
      <div className="card-container">{result}</div>

      <Footer />
    </div>
  );
}

export default App;
