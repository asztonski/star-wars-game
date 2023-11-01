import { CustomCard } from "@/app/components/Card/CustomCard";
import { useContext, useState } from "react";
import { AppContext } from "@/app/context/AppContext";

interface NameInputProps {
  placeHolder: string;
  id: string;
  setIsPlayerSet: (isSet: boolean) => void;
}

type PlayerName = string;

export const NameInput: React.FC<NameInputProps> = ({
  placeHolder,
  id,
  setIsPlayerSet,
}) => {
  const { setPlayers, setStage, gameMode } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const btnHandler = () => {
    if (inputValue.trim() !== "") {
      if (gameMode === "single player") {
        setPlayers((players: PlayerName[]) => [...players, inputValue]);
        setStage("result");
      } else {
        setPlayers((players: PlayerName[]) => [...players, inputValue]);
        if (id !== "player 1") {
          setStage("result");
        }
        setIsPlayerSet(true);
      }
      setError('')
    } else setError(`Please insert player's name`)
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
        <p className={'text-red-600'}>{error}</p>
        <button
          onClick={btnHandler}
          className={
            "px-6 py-4 rounded-md bg-yellow-300 text-cyan-900 w-full uppercase font-black"
          }
        >
          Ok
        </button>
      </div>
    </CustomCard>
  );
};
