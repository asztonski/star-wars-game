import { SelectUnit } from "../../stages/SelectUnit/SelectUnit";
import { Result } from "@/app/stages/Result/Result";
import { useContext, useEffect } from "react";
import { AppContext } from "@/app/context/AppContext";
import { SelectMode } from "@/app/stages/SelectMode/SelectMode";
import { SelectName } from "@/app/stages/SelectName/SelectName";

interface ContentProps {
  data: any;
}

export const Content: React.FC<ContentProps> = ({ data }) => {
  const { stage, players } = useContext(AppContext);

  const getContent = () => {
    switch (stage) {
      case "game mode":
        return <SelectMode />;
      case "player name":
        return <SelectName />
      case "select unit":
        return <SelectUnit />;
      case "result":
        return <Result />;
      default:
        return;
    }
  };

  useEffect(() => {
    console.log(players)
  }, [players])

  return <div className={"my-10"}>{getContent()}</div>;
};
