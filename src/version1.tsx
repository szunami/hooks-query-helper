import { useGhostCount, useHauntedHouses } from "./queries";

export const HauntedHouseReport = () => {
  const hauntedHouses = useHauntedHouses();

  return (
    <ul>
      {hauntedHouses.map((hauntedHouse) => {
        return (
          <li>
            <p>
              {hauntedHouse} : {useGhostCount(hauntedHouse)}
            </p>
          </li>
        );
      })}
    </ul>
  );
};