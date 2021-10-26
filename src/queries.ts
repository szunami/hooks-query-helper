import { useState } from "react";

export function useHauntedHouses() {
  return useState(["Creepy Mansion", "Abandoned WeWork"])[0];
}

export function useGhostCount(houseName: string) {
  return useState(5)[0];
}
