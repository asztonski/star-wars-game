import { Wrapper } from "@/app/components/Container/Wrapper";
import { UnitDetails } from "./UnitDetails";
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext";

export const Result = () => {
  const { firstPlayerUnit, secondPlayerUnit } = useContext(AppContext);

  return (
    <Wrapper title="Battle Results:">
      <UnitDetails unit={firstPlayerUnit} player="Dominik" />
      <UnitDetails unit={secondPlayerUnit} player="Przemek" />
    </Wrapper>
  );
};
