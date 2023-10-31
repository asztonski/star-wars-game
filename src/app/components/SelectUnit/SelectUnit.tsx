import { UnitButton } from "./UnitButton";

export const SelectUnit = () => {


  return (
    <div className={"flex flex-col items-center my-10"}>
      <h2 className={'text-3xl uppercase'}>Select your unit</h2>
      <div className={'flex gap-10 w-full my-10'}>
        <UnitButton id="Humans" title="Humans" />
        <UnitButton id="Starships" title="Starships" />
      </div>
    </div>
  );
};
