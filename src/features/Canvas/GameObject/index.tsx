"use client";
import React, { PropsWithChildren } from "react";

import { CanvasContext } from "@/context/CanvasContext";
import { GameObjectContext } from "@/context/GameObjectContext";

type GameObjectProps = PropsWithChildren & {
  x: number;
  y: number;
  h: number;
  w: number;
  fillStyle: string;
};

export const GameObject: React.FC<GameObjectProps> = ({
  x,
  y,
  h,
  w,
  fillStyle,
  children,
}) => {
  return (
    <GameObjectContext.Provider value={{ x, y, h, w }}>
      <CanvasContext.Consumer>
        {(ctx) => {
          if (ctx) {
            // Set the fill color
            ctx.fillStyle = fillStyle;

            // Draw a square at position (x, y) with width w and height h
            ctx.fillRect(x, y, w, h);
          }
          return children;
        }}
      </CanvasContext.Consumer>
    </GameObjectContext.Provider>
  );
};
