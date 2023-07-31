import "./App.css";
import Fishdex from "../../assets/fishdex.json";

function App() {
  const fishdex: Object = JSON.parse(JSON.stringify(Fishdex));

  return (
    <div className="App">
      {Object.values(fishdex).map((entry, i) => {
        return <img key={i} src={entry.image} alt="" />;
      })}
    </div>
  );
}

export default App;

