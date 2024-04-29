"use client";
import React, { PropsWithChildren } from "react";

import { CanvasContext } from "@/context/CanvasContext";
import { GameObjectContext } from "@/context/GameObjectContext";

export type SpriteProps = PropsWithChildren & {
  src: string;
};

export const Sprite: React.FC<SpriteProps> = ({ children, src }) => {
  return (
    <GameObjectContext.Consumer>
      {(gameObject) => (
        <CanvasContext.Consumer>
          {(ctx) => {
            if (ctx && gameObject) {
              const { x, y, h, w } = gameObject;

              const img = new Image();
              img.onload = () => {
                ctx.drawImage(img, x, y, h, w);
              };
              img.src = src;
            }
            return children;
          }}
        </CanvasContext.Consumer>
      )}
    </GameObjectContext.Consumer>
  );
};
