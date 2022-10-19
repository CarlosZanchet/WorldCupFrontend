import { Game } from "../../entities/Game";
import { Button } from "../Form/Button";
import { primeiraRodada } from "../utils/Jogos";
import { CardJogo } from "./CardJogo";

export function Jogos() {
  return (
    <>
    <div className="flex flex-row items-center justify-center">
      <Button color="primary">Primeira Rodada</Button>
      <Button color="primary">Segunda Rodada</Button>
      <Button color="primary">Terceira Rodada</Button>
      <Button color="primary">Oitavas de Final</Button>
      <Button color="primary">Quartas de Final</Button>
      <Button color="primary">Semi-Finais</Button>
      <Button color="primary">Final</Button>
    </div>
      {primeiraRodada.map((game: Game) => (
        <CardJogo game={game} />
      ))}
    </>
  );
}
