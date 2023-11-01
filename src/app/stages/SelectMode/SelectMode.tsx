import { Wrapper } from "@/app/components/Container/Wrapper";
import { ModeButton } from "./ModeButton";

export const SelectMode = () => {
  return (
    <Wrapper title="Select game mode:">
      <ModeButton id="single player" title="Single player" />
      <ModeButton id="multi player" title="Multi player" />
    </Wrapper>
  );
};
