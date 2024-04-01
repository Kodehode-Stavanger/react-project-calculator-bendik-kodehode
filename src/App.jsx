import React, { useState, useContext } from "react";
import Display from "./components/Display/Display";
import Keypad from "./components/Keypad/Keypad";

export const CalcContext = React.createContext();

function App() {
  const [input, setInput] = useState([]);
  const [result, setResult] = useState(0);

  return <>
    <CalcContext.Provider value={{input, setInput, result, setResult}}>
      <Display/>
      <Keypad/>
    </CalcContext.Provider>
  </>;
}

export default App;
