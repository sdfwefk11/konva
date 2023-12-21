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
  interface myObjType {
    firstNum: number;
    func: ({ secondNum, thirdNum }: funcPropsType) => void;
    result: string;
  }
  type funcPropsType = {
    secondNum: number;
    thirdNum: number;
  };
  const a: number = 1;
  const b: number = 1000;
  const c: number = 2000;
  const myObj: myObjType = {
    firstNum: a,
    func: function ({ secondNum, thirdNum }) {
      const firstNum = this.firstNum;
      const numCal = () => {
        console.log(`${this.result}: ${firstNum + secondNum + thirdNum}`, this);
      };
      numCal();
    },
    result: "result",
  };
  const obj = myObj.func.bind(myObj);
  obj({ secondNum: b, thirdNum: c });
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
