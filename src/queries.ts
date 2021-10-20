import { useState } from "react";

export function useHauntedHouses() {
  return useState(["Creepy Manor"])[0];
}

export function useGhostCount(houseName: string) {
  return useState(5)[0];
}
