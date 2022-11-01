import { Heading, Text } from "coheza-ui";
import { useEffect, useState } from "react";
import { Bolao } from "../../entities/Bolao";
import { getBoloesByUser } from "../../services/BolaoService";
import { getResultByUser } from "../../services/ResultService";
import { FaRegStar } from "react-icons/fa";

export function Dashboard() {
  const [boloes, setBoloes] = useState<Bolao[]>([]);
  const [myPoints, setMyPoints] = useState<number>(0);

  useEffect(() => {
    getBoloesByUser().then((response) => {
      setBoloes(response.data);
    });

    getResultByUser().then((response) => {
      setMyPoints(response.data);
    });
  }, []);

  return (
    <div>
      <Heading>Dashboard</Heading>

      <div className="flex flex-col mt-5">
        <strong className="text-sm text-default-100">Meus Pontos</strong>
        <strong className="text-2xl text-[#daa520] flex items-center gap-1">
          <FaRegStar size={18} />
          {myPoints}
        </strong>
      </div>
      <div className="mt-5 gap-5 flex flex-col">
        <Text>Meus Bolões</Text>

        {boloes.map((bolao) => (
          <span>{bolao.name}</span>
        ))}
      </div>
    </div>
  );
}
