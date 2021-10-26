import { useGhostCount, useHauntedHouses } from "./queries";

export const HauntedHouseReport = () => {
  const hauntedHouses = useHauntedHouses();

  return (
    <ul>
      {hauntedHouses.map((hauntedHouse) => {
        return (
          <li>
            <GhostCount hauntedHouse={hauntedHouse} />
          </li>
        );
      })}
    </ul>
  );
};

type GhostCountProps = {
  hauntedHouse: string;
};

const GhostCount = ({ hauntedHouse }: GhostCountProps) => {
  return (
    <p>
      {hauntedHouse} : {useGhostCount(hauntedHouse)}
    </p>
  );
};
