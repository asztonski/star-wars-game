import { UnitDetails } from "./UnitDetails";
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext";

export const Result = () => {
  const { firstPlayerUnit, secondPlayerUnit } = useContext(AppContext);

  return (
    <div className={"flex gap-10"}>
      <UnitDetails unit={firstPlayerUnit} player="Dominik" />
      <UnitDetails unit={secondPlayerUnit} player="Przemek" />
    </div>
  );
};
