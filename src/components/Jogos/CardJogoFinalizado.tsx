import clsx from "clsx";
import { ChangeEvent, useEffect, useState } from "react";
import { GiAbstract042 } from "react-icons/gi";
import { TbClock } from "react-icons/tb";
import { Result } from "../../entities/Result";
import { saveResult } from "../../services/ResultService";
import { dateFormat } from "../../utils/FormatUtils";

interface CardGameProps {
  result: Result;
}

export function CardJogoFinalizado({ result }: CardGameProps) {
  const [homeScore, setHomeScore] = useState<number | undefined>(
    result.home_result
  );
  const [outsideScore, setOutsideScore] = useState<number | undefined>(
    result.outside_result
  );

  function handleSaveResult() {
    result.home_result = homeScore;
    result.outside_result = outsideScore;
    saveResult(result);
  }

  function handleHome(event: any) {
    setHomeScore(event.target.value);
  }

  function handleOutside(event: any) {
    setOutsideScore(event.target.value);
  }

  return (
    <div className="flex flex-col">
      <div
        className={clsx(" flex flex-col max-w-[250px] px-2 py-1", {
          "bg-primary-400 bg-opacity-20": !!homeScore && !!outsideScore,
          "bg-default-900": homeScore == null || outsideScore == null,
        })}
      >
        <div className="flex flex-col items-center justify-center mb-2">
          <span className="text-xs text-default-100 flex items-center gap-1">
            <GiAbstract042 size={10} />
            {result.game.stadium}
          </span>
          <span className="text-[10px] text-default-100 flex items-center gap-1">
            <TbClock size={10} />
            {dateFormat(result.game.date)}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center mb-2">
          <div className="flex flex-col items-center text-center justify-center ">
            <img src={result.game.home_team?.urlflag} width={40} alt="" />
            <span className="text-[0.65rem] text-default-100">{result.game.home_team?.name}</span>
          </div>
          <strong className="text-default-100 text-xl">{result.home_result}</strong>
          <div className="text-default-200 font-bold">x</div>
          <strong className="text-default-100 text-xl">{result.outside_result}</strong>
          <div className="flex flex-col items-center justify-center text-center">
            <img src={result.game.outside_team?.urlflag} width={40} alt="" />
            <span className="text-[0.65rem] text-default-100">{result.game.outside_team?.name}</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-primary-700 bg-opacity-50">
        <span className="text-[0.8rem] text-default-100">
          Placar: {result.game.home_score} x {result.game.outside_score}
        </span>
      </div>
    </div>
  );
}
