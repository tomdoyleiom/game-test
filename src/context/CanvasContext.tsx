"use client";
import { createContext, useContext } from "react";

export type CanvasContext = CanvasRenderingContext2D | null;

export const CanvasContext = createContext<CanvasContext | null>(null);

export const useCanvasContext = () => {
  return useContext(CanvasContext);
};
