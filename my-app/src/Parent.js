import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [message, setMessage] = useState("Hello");

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Message: {message}</p>
      <Child updateMessage={() => setMessage("Updated!")} />
    </div>
  );
}

export default Parent;
