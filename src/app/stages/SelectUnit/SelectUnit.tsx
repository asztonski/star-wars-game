import { Wrapper } from "@/app/components/Container/Wrapper";
import { UnitButton } from "./UnitButton";

export const SelectUnit = () => {
  return (
    <Wrapper title="Select your unit">
      <UnitButton id="humans" fraction="Humans" />
      <UnitButton id="starships" fraction="Starships" />
    </Wrapper>
  );
};
