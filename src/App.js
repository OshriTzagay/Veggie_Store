import logo from "./logo.svg";
import "./App.css";
import Logo from "./components/logo/logo";
import Veggie from "./components/logo/veggieAdd/veggie";
import Fruit from "./components/logo/fruidAdd/fruit";
import Tavlin from "./components/tavlinAdd/tavlin";
import SecVeggie from "./components/secondVeggie/secVeggie";

function App() {
  return <div className="App">
    <Logo/>
    {/* <div className="addVeggieDiv"><h2 className="addVeggieTitle">Lets Add a Veggie..</h2></div> */}
    {/* {/* <SecVeggie/> * -//----> that is Another Version///}  */}
    <Veggie/>
    <Fruit/>
    <Tavlin/>
    
  </div>;
}

export default App;
