import { SelectUnit } from "../../stages/SelectUnit/SelectUnit";
import { Result } from "@/app/stages/Result/Result";
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext";
import { SelectMode } from "@/app/stages/SelectMode/SelectMode";

interface ContentProps {
  data: any;
}

export const Content: React.FC<ContentProps> = ({ data }) => {
  const { stage } = useContext(AppContext);

  const getContent = () => {
    switch (stage) {
      case "game mode":
        return <SelectMode />;
      case "select unit":
        return <SelectUnit />;
      case "result":
        return <Result />;
      default:
        return;
    }
  };

  return <div className={"my-10"}>{getContent()}</div>;
};
