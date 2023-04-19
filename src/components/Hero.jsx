import react from "react";

function Hero() {
  let welcomeText = "Welcome to gods own country";
  let styles = {
    color: "white",
    fontSize: 30,
    textShadow: "1px 1px 5px #000000",
    maxWidth: 300,
  };

  return (
    <div className="hero">
      <h3 style={styles}>{`${welcomeText}`}</h3>
    </div>
  );
}

export default Hero;
