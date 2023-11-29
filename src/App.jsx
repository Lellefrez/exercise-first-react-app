import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Titolo from "./components/Titolo";
import Paragrafo from "./components/Paragrafo";
import "./App.css";
import Immagine from "./components/Immagine";

function App() {
  return (
    <>
      <Titolo />
      <Paragrafo />
      <div className="cards">
        <Immagine
          src={
            "https://twinfinite.net/wp-content/uploads/2022/10/Tokyo-Revengers-Mikey-Staring-at-Camera-Screenshot.jpg?w=1200"
          }
          alt="Immagine di Mikey"
          didascalia={"Mikey arrabbiato"}
        />
        <Immagine
          src={
            "https://i.pinimg.com/originals/3a/4c/64/3a4c64b726244d79e8009a30fdd75e3a.png"
          }
          alt="Immagine di Mikey"
          didascalia={"Mikey felice"}
        />
      </div>
      <label htmlFor="nameScelta">Quale Mikey preferisci?</label>
      <input id="nameScelta" type="checkbox" />
      <input id="nameScelta" type="checkbox" />
    </>
  );
}

export default App;
