import clsx from "clsx";
import { ChangeEvent, useEffect, useState } from "react";
import { GiAbstract042 } from "react-icons/gi";
import { TbClock } from "react-icons/tb";
import { Result } from "../../entities/Result";
import { saveResult } from "../../services/ResultService";

interface CardGameProps {
  result: Result;
}

export function CardJogo({ result }: CardGameProps) {

  const [homeScore, setHomeScore] = useState<number | undefined>(result.home_result)
  const [outsideScore, setOutsideScore] = useState<number | undefined>(result.outside_result)


  function handleSaveResult() {
    result.home_result = homeScore;
    result.outside_result = outsideScore;
    saveResult(result)
  }

  function handleHome(event: any) {
    setHomeScore(event.target.value)
  }

  function handleOutside(event: any) {
    setOutsideScore(event.target.value)
  }


  return (
    <div className={clsx(" flex flex-col max-w-[250px] px-2 py-1", {
      "bg-primary-400 bg-opacity-20 ring-1 ring-primary-400": !!homeScore && !!outsideScore,
      "bg-default-900": homeScore == null || outsideScore == null
    })}>
      <div className="flex flex-col items-center justify-center mb-2">
        <span className="text-xs text-default-100 flex items-center gap-1">
          <GiAbstract042 size={10} />
          {result.game.stadium}
        </span>
        <span className="text-[10px] text-default-100 flex items-center gap-1">
          <TbClock size={10} />
          {result.game.date.toString()}
        </span>
      </div>
      <div className="flex flex-row justify-between items-center mb-2 ">
        <div className="flex flex-col items-center justify-center ">
          <img
            className="rounded-full "
            src={result.game.home_team?.urlflag}
            width={50}
            alt=""
          />
        </div>
        <input
          className="w-10 bg-input-bg text-center focus:ring-2 ring-primary-700 outline-none text-default-100 font-bold text-xl rounded-lg h-9"
          type="text"
          onBlur={handleSaveResult}
          onChange={handleHome}
          value={homeScore}
        />
        <div className="text-default-200 font-bold">x</div>
        <input
          className="w-10 bg-input-bg text-center focus:ring-2 ring-primary-700 text-default-100 outline-none font-bold text-xl rounded-lg h-9"
          type="text"
          onBlur={handleSaveResult}
          onChange={handleOutside}
          value={outsideScore}
        />
        <div className="flex flex-col items-center justify-center">
          <img
            className="rounded-full"
            src={result.game.outside_team?.urlflag}
            width={50}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
