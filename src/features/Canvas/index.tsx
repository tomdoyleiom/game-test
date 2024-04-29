"use client";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

import { CanvasContext } from "../../context/CanvasContext";

const Canvas: React.FC<PropsWithChildren> = ({ children }) => {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log("running canvas");
    if (canvasRef && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        setContext(context);
      }
    }
  }, []);

  return (
    <CanvasContext.Provider value={context}>
      <canvas ref={canvasRef}></canvas>
      {children}
    </CanvasContext.Provider>
  );
};

export default Canvas;
