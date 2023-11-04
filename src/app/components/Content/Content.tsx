import { SelectUnit } from "../../stages/SelectUnit/SelectUnit";
import { Battleground } from "@/app/stages/BattleResult/Battleground";
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext";
import { SelectMode } from "@/app/stages/SelectMode/SelectMode";
import { SelectName } from "@/app/stages/SelectName/SelectName";


export const Content = () => {
  const appContext = useContext(AppContext);

  if (!appContext) return null;
  const { stage } = appContext;

  const getContent = () => {
    switch (stage) {
      case "game mode":
        return <SelectMode />;
      case "player name":
        return <SelectName />
      case "select unit":
        return <SelectUnit />;
      case "result":
        return <Battleground />;
      default:
        return;
    }
  };

  return <div className={"my-10"}>{getContent()}</div>;
};
