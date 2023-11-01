import { Wrapper } from "@/app/components/Container/Wrapper";
import { UnitDetails } from "./UnitDetails";
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext";

export const Result = () => {
  const { playersDetails } = useContext(AppContext);

  return (
    <Wrapper title="Battle Results:">
      <UnitDetails score={playersDetails[0].score} unit={playersDetails[0].unit} player={playersDetails[0].name} />
      <UnitDetails score={playersDetails[0].score} unit={playersDetails[1].unit} player={playersDetails[1].name !== null ? playersDetails[1].name : '[Computer] Galaxy Destroyer'} />
    </Wrapper>
  );
};
