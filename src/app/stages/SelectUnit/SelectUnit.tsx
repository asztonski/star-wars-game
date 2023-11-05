import { Wrapper } from "@/app/components/Container/Wrapper";
import { Button } from "@/app/components/Button/Button";
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext";

export const SelectUnit = () => {
  const appContext = useContext(AppContext);

  if (!appContext) return null;
  const { setStage, playersDetails, setPlayersDetails } = appContext;

  const unitOptions = [
    { label: "humans", value: "humans" },
    { label: "starships", value: "starships" },
  ];

  const onClickHandler = (selectedUnit: string) => {
    setStage("result");
    const updatedUnits = [...playersDetails];
    if (selectedUnit === "humans") {
      updatedUnits[0].unit = "humans";
      updatedUnits[1].unit = "starships";
    } else {
      updatedUnits[0].unit = "starships";
      updatedUnits[1].unit = "humans";
    }
    setPlayersDetails(updatedUnits);
  };

  return (
    <Wrapper title="Player 1 select your unit">
      {unitOptions.map((unit) => (
        <Button
          key={unit.value}
          secondaryStyle
          onClick={() => onClickHandler(unit.value)}
          content={unit.label}
        />
      ))}
    </Wrapper>
  );
};
