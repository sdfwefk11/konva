import { useState, useEffect } from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Text } from "react-konva";
import Title from "./components/Title";
import ColoredRect from "./components/ColoredRect";

function App() {
  const [toggle, setToggle] = useState(false);
  const onClick = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <Title />
      <div>
        <button onClick={onClick}>Click</button>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <ColoredRect active={toggle} />
          </Layer>
        </Stage>
      </div>
    </>
  );
}

export default App;
