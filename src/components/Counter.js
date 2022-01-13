import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    // setCount(count + 1);
    // setCount(count + 1);
    console.log(count);
    // => 0
  
    setCount(count + 1);
    // equivalent to setCount(0 + 1)
  
    console.log(count);
    // => 0
  
    setCount(count + 1);
    // equivalent to setCount(0 + 1)
  
    console.log(count);
    // => 0
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
