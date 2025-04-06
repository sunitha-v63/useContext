import React, { useState } from "react";
import { counterContext } from "./Context";
import Grandchild from "./Grandchild";

function CounterProvider() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <counterContext.Provider value={{ count }}>
        <Grandchild />
      </counterContext.Provider>
    </>
  );
}

export default CounterProvider;
