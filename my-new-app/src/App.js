import logo from "./logo.svg";
import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const [coffees, setCoffees] = useState([]);
  const [coffeeIndex, setCoffeeIndex] = useState(0);
  useEffect(() => {
    (async () => {
      const ret = await fetch(
        "https://countriesnow.space/api/v0.1/countries/capital"
      );
      const data = await ret.json();
      setCoffees(data);
    })();
  }, []);
  if (coffees.length === 0) {
    return <></>;
  }
  return (
    <>
      <div className="App">
        <div className="cofeeContainer">
          <p className="cofeeTitle">{coffees[coffeeIndex].title}</p>
          <p className="coffeIngr">{coffees[coffeeIndex].ingredients}</p>
          <div className="arrox-container">
            <button
              className="nextButton"
              onClick={() => {
                setCoffeeIndex(coffeeIndex + 1);
              }}
              hidden={coffeeIndex === coffees.length - 1}
            >
              NEXT
            </button>
            <button
              className="backButton"
              onClick={() => {
                setCoffeeIndex(coffeeIndex - 1);
              }}
              hidden={coffeeIndex === 0}
            >
              BACK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
