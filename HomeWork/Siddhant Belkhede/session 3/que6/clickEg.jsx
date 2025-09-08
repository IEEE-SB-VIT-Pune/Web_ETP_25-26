import { useState } from "react";

function ClickExample() {
  const [text, setText] = useState("Not Clicked");

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText("Button Clicked!")}>
        Click Me
      </button>
    </div>
  );
}

export default ClickExample;
