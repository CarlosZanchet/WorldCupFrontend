import { Game } from "../../entities/Game";
import { GiAbstract042 } from "react-icons/gi";
import { TbClock } from "react-icons/tb";

interface CardGameProps {
  game: Game;
}



export function CardJogo({ game }: CardGameProps) {
  return (
    <div className="bg-default-900 flex flex-col max-w-[250px] px-2 py-1">
      <div className="flex flex-col items-center justify-center mb-2">
        <span className="text-xs text-default-100 flex items-center gap-1">
          <GiAbstract042 size={10} />
          {game.stadium}
        </span>
        <span className="text-[10px] text-default-100 flex items-center gap-1">
          <TbClock size={10} />
          {game.date.toString()}
        </span>
      </div>
      <div className="flex flex-row justify-between items-center mb-2 ">
        <div className="flex flex-col items-center justify-center ">
          <img
            className="rounded-full "
            src={game.homeTeam?.urlFlag}
            width={50}
            alt=""
          />
        </div>
        <input
          className="w-10 bg-input-bg text-center focus:ring-2 ring-primary-700 outline-none text-default-100 font-bold text-xl rounded-lg h-9"
          type="text"
        />
        <div className="text-default-200 font-bold">x</div>
        <input
          className="w-10 bg-input-bg text-center focus:ring-2 ring-primary-700 text-default-100 outline-none font-bold text-xl rounded-lg h-9"
          type="text"
        />
        <div className="flex flex-col items-center justify-center">
          <img
            className="rounded-full"
            src={game.outsideTeam?.urlFlag}
            width={50}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
