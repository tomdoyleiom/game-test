"use client";
import { useEffect } from "react";

import Canvas from "@/features/Canvas";
import { GameObject } from "@/features/Canvas/GameObject";
import { Sprite } from "@/features/Canvas/Sprite";

export default function Home() {
  // initialize page
  useEffect(() => {
    console.info(`initializing:  page`);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Canvas>
        <GameObject x={10} y={10} w={50} h={50} fillStyle="red" />
        <GameObject x={20} y={10} w={50} h={50} fillStyle="green" />
        <GameObject x={30} y={10} w={50} h={50} fillStyle="blue">
          <Sprite src="https://placehold.co/20x20" />
        </GameObject>
      </Canvas>
    </main>
  );
}
