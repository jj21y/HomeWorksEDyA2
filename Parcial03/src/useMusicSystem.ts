import { useMemo } from "react";
import { MusicSystem } from "./MusicSystem";

export const useMusicSystem = () => {
  const system = useMemo(() => new MusicSystem(), []);
  return system;
};