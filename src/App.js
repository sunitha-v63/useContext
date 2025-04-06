import { createContext, useState } from "react";
import "./App.css";
import Container from "./Componenets/Container";
import CounterProvider from "./Componenets/CounterProvider";
import Authentication from "./Componenets/Authentication";

export const ThemeContext = createContext("light");// light default value

function App() {
  const [theme, setTheme] = useState("light");

  const toggletheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <h1>Usecontext</h1>
        <button onClick={toggletheme}>toggle click</button>
        <Container />
        <CounterProvider/>
        <Authentication/>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
