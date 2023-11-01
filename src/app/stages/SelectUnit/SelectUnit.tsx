import { Wrapper } from "@/app/components/Container/Wrapper";
import { UnitButton } from "./UnitButton";

export const SelectUnit = () => {
  return (
    <Wrapper title="Selec your unit">
      <UnitButton id="Humans" title="Humans" />
      <UnitButton id="Starships" title="Starships" />
    </Wrapper>
  );
};
