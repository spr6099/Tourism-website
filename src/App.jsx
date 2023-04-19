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
          Image: cardItem.imgSrc,
          Place: cardItem.PlaceName,
                Description: cardItem.PlaceDescription,
        }}
      />
    );
  });

  return (
    <div>
      <Header />
      <Hero />
      <div className="container">
      <div className="card-container">
        <h2>Destinations</h2>
      
        {result}
       
        
        </div>
        <div>
        <aside>
          <h2>Favourites</h2>
        </aside>
        </div>
        </div>
        
        
      <Footer />
   </div>
  );
}

export default App;
