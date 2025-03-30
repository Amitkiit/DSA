//app.js

import React, { useState } from "react";
import Counter from "./component/counter";
import { useContext } from "react";
import { counterContext } from "./context/counter";
const APP = () => {
  const counterState = useContext(counterContext);
  return (
    <div>
      <h1>Counter is {counterState.count} </h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

//export default APP

//Component.jsx
import React from "react";

import React, { useContext } from "react";
import { CounterContext } from "./context/counter";

const Counter = () => {
  const counterContext = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => counterContext.setCount(counterContext.count + 1)}>
        Increment
      </button>
      <button onClick={() => counterContext.setCount(counterContext.count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;

// context.jsx
import { createContext } from "react";
export const counterContext = createContext(null);
export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <counterContext.Provider value={{ count, setCount }}>
      {props.children}
    </counterContext.Provider>
  );
};
