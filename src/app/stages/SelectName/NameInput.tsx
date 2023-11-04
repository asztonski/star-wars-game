import { useContext, useState } from "react";
import { AppContext } from "@/app/context/AppContext";
import { CustomCard } from "@/app/components/Card/CustomCard";
import { Button } from "@/app/components/Button/Button";

interface NameInputProps {
  placeHolder: string;
  id: string;
  setIsPlayerSet: (isSet: boolean) => void;
}

export const NameInput: React.FC<NameInputProps> = ({
  placeHolder,
  id,
  setIsPlayerSet,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const appContext = useContext(AppContext);

  if (!appContext) return null;
  const { playersDetails, setPlayersDetails, setStage, gameMode } = appContext;

  const btnHandler = () => {
    const updatedNames = [...playersDetails];
    const isInputEmpty = inputValue.trim() === "";
    const isMultiPlayer = gameMode === "multi player";

    if (!isInputEmpty) {
      if (isMultiPlayer) {
        if (id === "player 1") {
          updatedNames[0].name = inputValue;
          setIsPlayerSet(true);
        }
        if (id === "player 2") {
          updatedNames[1].name = inputValue;
          setStage("select unit");
        }
      } else {
        updatedNames[0].name = inputValue;
        setStage("select unit");
      }
      setPlayersDetails(updatedNames);
      setError("");
    } else setError(`Please insert player's name`);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <CustomCard>
      <div className={"flex flex-col gap-4 w-1/2 items-center"}>
        <input
          className="w-full p-3"
          placeholder={placeHolder}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <p className={"text-red-600"}>{error}</p>
        <div className={"w-1/2"}>
          <Button primaryStyle onClick={btnHandler}>
            Ok
          </Button>
        </div>
      </div>
    </CustomCard>
  );
};
