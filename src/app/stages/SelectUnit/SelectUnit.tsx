import { Wrapper } from "@/app/components/Container/Wrapper";
import { UnitButton } from "./UnitButton";

export const SelectUnit = () => {
  return (
    <Wrapper title="Select your unit">
      <UnitButton id="Humans" fraction="Humans" />
      <UnitButton id="Starships" fraction="Starships" />
    </Wrapper>
  );
};
