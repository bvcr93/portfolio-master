import Intro from "./components/intro/Intro";
import About from "./components/intro/About";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";
import Toggle from "./components/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";



function App() {
 
const theme = useContext(ThemeContext)
const darkMode = theme.state.darkMode
  return (
    <div style={{ backgroundColor: darkMode ? "#222" : "white",
    color: darkMode && "white"}}>
      <Toggle ></Toggle>
<Intro ></Intro>

<About ></About>
<ProductList></ProductList>
<Contact></Contact>
    </div>
  );
}

export default App;
