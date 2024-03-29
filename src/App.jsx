import React, { useState, useContext } from "react";
import Display from "./Display/Display";
import Keypad from "./Keypad/Keypad";

export const DisplayContext = React.createContext();

function App() {
  const [display, setDisplay] = useState("0");

  return <>
    <DisplayContext.Provider value={[display, setDisplay]}>
      <Display/>
      <Keypad/>
    </DisplayContext.Provider>
  </>;
}

export default App;
