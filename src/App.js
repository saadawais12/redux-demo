//import React from "react";
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import store from "./redux/store";
import { Provider } from "react-redux";
function App() {
  // const [buttonText, setButtonText] = useState("Click me, please");

  // return (
  //   <button onClick={() => setButtonText("Thanks, been clicked!")}>
  //     {buttonText}
  //   </button>
  // );
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer></CakeContainer>
      </div>
    </Provider>
  );
}

export default App;
