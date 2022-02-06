import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
// variable and function for state
  const [isDarkMode, setIsDarkMode] = useState(false);
// handler
  function handleDarkMode(){
    setIsDarkMode((isDarkMode)=> !isDarkMode);
  }
  // replaced the false with the isDarkMode variable so now it reads is appClass = isDarkMode the css style App Dark will be applied, else, light
  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick ={handleDarkMode}>
        {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
