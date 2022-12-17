import logo from "./logo.svg";
import "./App.css";
import Gists from "./Gists";
import { Nav } from "react-bootstrap";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Gists />
    </div>
  );
}

export default App;
