import { useState, useEffect } from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Text } from "react-konva";

export default function ColoredRect({ active }: { active: boolean }) {
  const [color, setColor] = useState("blue");
  const [x, setX] = useState(0);
  const onClickColor = () => {};
  useEffect(() => {
    setTimeout(() => {
      if (!active) return;
      if (x === 150) return;
      setX((prev) => prev + 1);
      setColor(Konva.Util.getRandomColor());
      console.log("me");
    }, 100);
  }, [x, active]);
  return (
    <Rect
      x={x}
      y={x}
      width={x}
      height={x}
      fill={color}
      shadowBlur={5}
      onClick={onClickColor}
    />
  );
}
