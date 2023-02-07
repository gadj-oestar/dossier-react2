import "./App.css";
import InputSpinner from "./inputspinner/InputSpinner";
import Rating from "./Rating/Rating";
import Switch from "./SwitchDay/Switch";

function App() {
  return (
    <div className="App">
      <Switch day={true} />

      <InputSpinner />
      <Rating rank="2" />
    </div>
  );
}

export default App;
