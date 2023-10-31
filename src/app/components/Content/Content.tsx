import { SelectUnit } from "../SelectUnit/SelectUnit";
import { UnitDetails } from "../UnitDetails/UnitDetails";
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext";

interface ContentProps {
  data: any;
}

export const Content: React.FC<ContentProps> = ({ data }) => {
  const { isSelected, firstPlayerUnit, secondPlayerUnit } = useContext(AppContext);

  return (
    <div>
      <SelectUnit />
      {isSelected ? (
        <div className={'flex gap-10'}>
          <UnitDetails unit={firstPlayerUnit} player="Dominik" />
          <UnitDetails unit={secondPlayerUnit} player="Przemek" />
        </div>
      ) : null}
    </div>
  );
};
