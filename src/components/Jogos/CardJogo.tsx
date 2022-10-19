import { Game } from "../../entities/Game"

interface CardGameProps {
  game: Game;
}

export function CardJogo({ game }: CardGameProps) {
  return (
    <div className="bg-white flex flex-col max-w-xs rounded-full px-7 py-2 ring-2 ring-primary-800">
      <div className="flex flex-col items-center justify-center mb-2">
        <span className="text-xs text-gray-800">{game.stadium}</span>
        <span className="text-[10px] text-gray-800">{game.date.toString()}</span>
      </div>
      <div className="flex flex-row justify-between items-center mb-2 ">
        <div className="flex flex-col items-center justify-center ">
          <img
            src={game.homeTeam?.urlFlag}
            width={50}
            alt=""
          />
        </div>
        <input className="w-10 text-center ring-2 ring-gray-300 focus:ring-primary-800 outline-none font-bold text-xl rounded-lg h-9 ring-gray-200" type="text" />
        <div>x</div>
        <input className="w-10 text-center ring-2 ring-gray-300 focus:ring-primary-800 outline-none font-bold text-xl rounded-lg h-9 ring-gray-200" type="text" />
        <div className="flex flex-col items-center justify-center">
          <img
            src={game.outsideTeam?.urlFlag}
            width={50}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}