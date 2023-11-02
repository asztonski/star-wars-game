import { Wrapper } from "@/app/components/Container/Wrapper";
import { UnitButton } from "./UnitButton";

export const SelectUnit = () => {
  return (
    <Wrapper title="Player 1 select your unit">
      <UnitButton id="humans" fraction="Humans" />
      <UnitButton id="starships" fraction="Starships" />
    </Wrapper>
  );
};
