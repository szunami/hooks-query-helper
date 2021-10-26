import { useEffect, useState } from "react";
import { useGhostCount, useHauntedHouses } from "./queries";

export const RegionalHauntedHouseReport = () => {
  const initialQueryState: Record<string, null | number> = {};
  const hauntedHouses = useHauntedHouses();
  for (const hauntedHouse of hauntedHouses) {
    initialQueryState[hauntedHouse] = null;
  }

  const [queryState, setQueryState] = useState(initialQueryState);

  if (Object.values(queryState).some((count) => count === null)) {
    return (
      <div>
        <p> Still loading </p>
        {hauntedHouses.map((hauntedHouse) => (
          <QueryHelper
            hauntedHouse={hauntedHouse}
            setQueryState={setQueryState}
          />
        ))}
      </div>
    );
  }

  const regionalTotal = Object.values(queryState).reduce(
    (a, b) => (a as number) + (b as number),
    0
  );

  return <p> There are {regionalTotal} ghosts in this region </p>;
};

type QueryHelperProps = {
  hauntedHouse: string;
  setQueryState: React.Dispatch<
    React.SetStateAction<Record<string, null | number>>
  >;
};

const QueryHelper = ({ hauntedHouse, setQueryState }: QueryHelperProps) => {
  const ghostCount = useGhostCount(hauntedHouse);

  useEffect(() => {
    setQueryState((currentQueryState) => {
      const newQueryState = { ...currentQueryState };
      newQueryState[hauntedHouse] = ghostCount;
      return newQueryState;
    });
  }, [ghostCount]);
  return null;
};
