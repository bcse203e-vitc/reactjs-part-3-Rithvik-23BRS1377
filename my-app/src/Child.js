import React from "react";

function Child({ updateMessage }) {
  return <button onClick={updateMessage}>Change Parent Message</button>;
}

export default Child;
