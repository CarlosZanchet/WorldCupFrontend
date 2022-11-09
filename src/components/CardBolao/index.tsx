import clsx from "clsx";
import { Bolao } from "../../entities/Bolao";
import { User } from "../../entities/User";
import { calculo, scoreByUser } from "../../utils/ScoreUtils";
import { FaTrophy } from "react-icons/fa";
import { RiMedalFill } from "react-icons/ri";
import { Span } from "coheza-ui";

interface CardBolaoProps {
  bolao: Bolao;
}

interface BolaoValues {
  user: User;
  score: number;
}

export function CardBolao({ bolao }: CardBolaoProps) {
  let values: BolaoValues[] = bolao.users.map((user) => {
    return {
      user,
      score: scoreByUser(user),
    };
  });

  values = values.sort(function (a, b) {
    return b.score - a.score;
  });

  console.log(values);

  return (
    <div className="flex flex-col gap-2 bg-default-900/90 p-4">
      <div className="flex gap-2 items-end">
        <strong className="text-default-100">{bolao.name}</strong>
        <Span type={bolao.type === "private" ? "danger" : "success"}>
          {bolao.type === "private" ? "Privado" : "Público"}
        </Span>
      </div>
      <div className="flex flex-col gap-1">
        {values.map((value, index) => (
          <div
            key={value.user.id}
            className={clsx("flex justify-between ", {
              "bg-[#daa520]/20 text-[#daa520] px-8 py-2": index === 0,
              "bg-[#c0c0c0]/20 text-[#c0c0c0] px-8 py-[6px]": index === 1,
              "bg-[#cd7f32]/20 text-[#cd7f32] px-8 py-1": index === 2,
              "bg-default-900 text-default-100 px-8 py-1": index > 2,
            })}
          >
            <div className="flex gap-2 items-center">
              <strong>{index + 1}º</strong>
              {index === 0 ? <FaTrophy /> : <RiMedalFill />}

              <strong>{value.user.name}</strong>
              <span className="text-xs">{value.user.username}</span>
            </div>
            <strong>{value.score} pts</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
