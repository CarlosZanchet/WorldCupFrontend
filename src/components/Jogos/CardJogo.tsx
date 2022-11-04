import clsx from "clsx";
import { useState } from "react";
import { GiAbstract042 } from "react-icons/gi";
import { TbClock } from "react-icons/tb";
import { Result } from "../../entities/Result";
import { saveResult } from "../../services/ResultService";
import { dateFormat } from "../../utils/FormatUtils";
import { FaQuestionCircle } from "react-icons/fa";

interface CardGameProps {
  result: Result;
}

export function CardJogo({ result }: CardGameProps) {
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
            {result.game.home_team?.urlflag ? (
              <img
                src={result.game.home_team?.urlflag}
                width={40}
                title={result.game.home_team?.name}
              />
            ) : (
              <FaQuestionCircle className="text-default-100 mx-4" size={30} />
            )}

            <span className="text-[0.65rem] text-default-100">
              {result.game.home_team?.name}
            </span>
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
          <div className="flex flex-col items-center justify-center text-center">
            {result.game.home_team?.urlflag ? (
              <img
                src={result.game.outside_team?.urlflag}
                width={40}
                title={result.game.outside_team?.name}
              />
            ) : (
              <FaQuestionCircle className="text-default-100 mx-4" size={30} />
            )}

            <span className="text-[0.65rem] text-default-100">
              {result.game.outside_team?.name}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[250px] flex flex-col items-center bg-default-700">
        <span className="text-[0.8rem] text-default-100">
          Resultado Pendente
        </span>
      </div>
    </div>
  );
}
