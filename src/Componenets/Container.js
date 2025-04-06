import React from "react";
import Uers from "./Uers";

function Container() {
  return (
    <div>
      <h1>Container</h1>
      <h6>Task1</h6>
      <h3>Context API</h3>
      <p>
        The Context API is used to share state between multiple components
        without prop drilling. Instead of passing props down manually, context
        allows any component to access shared data.
      </p>
      <h6>Task2</h6>
      <h3>Create Context</h3>
      <p>ThemeContext is create</p>
      <h6>Task3</h6>
      <h3>Context Provider Example</h3>
      <p>ThemeContext.provider</p>
      <h6>Task4</h6>
      <p>Access Context with useContext:</p>
      <p>click uers</p>
      <h6>Task5</h6>
      <p>Sibling component</p>
      <h6>Task6</h6>
      <p>default value</p>
      <h6>Task7</h6>
      <p>Dynamic Context Value:</p>
      <h6>Task8</h6>
      <p>Nested Context Access</p>
      <h6>Task9</h6>
      <p>Update Context Value with useState</p>
      <h6>Task10</h6>
      <p> Multiple Contexts:</p>
      <h6>Task11</h6>
      <p>Conditional Rendering with Context</p>
      <h6>Task12</h6>
      <p>Theme Toggle using Context</p>
      <h6>Task13</h6>
      <p>Context with API Data</p>
      <Uers />
    </div>
  );
}

export default Container;
