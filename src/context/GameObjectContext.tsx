"use client";
import { createContext, useContext } from "react";

export type GameObjectContext = { x: number; y: number; h: number; w: number };

export const GameObjectContext = createContext<GameObjectContext | null>(null);

export const useGameObjectContext = () => {
  return useContext(GameObjectContext);
};
