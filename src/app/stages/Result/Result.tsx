import { Wrapper } from "@/app/components/Container/Wrapper";
import { UnitDetails } from "./UnitDetails";
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext";

export const Result = () => {
  const { firstPlayerUnit, secondPlayerUnit, players } = useContext(AppContext);

  return (
    <Wrapper title="Battle Results:">
      <UnitDetails unit={firstPlayerUnit} player={players[0]} />
      <UnitDetails unit={secondPlayerUnit} player={players.length > 1 ? players[1] : '[Computer] Galaxy Destroyer'} />
    </Wrapper>
  );
};
