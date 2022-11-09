import { Button, ButtonGroup, Heading, useToast } from "coheza-ui";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Game } from "../../entities/Game";
import { getGamesByUserAndStep } from "../../services/GameService";
import { CardJogo } from "./CardJogo";

const GROUPS: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];

export function Jogos() {
  const { showNotification } = useToast();

  const [step, setStep] = useState(1);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    getGamesByUserAndStep(step.toString())
      .then((response) => {
        setGames(response.data);
      })
      .catch(() => {
        showNotification("danger", "Houve um erro ao carregar os jogos!");
      });
  }, [step]);

  function gamesByGroup(group: string) {
    return games.filter((games) => games.group_team === group);
  }

  return (
    <>
      <Heading>Jogos</Heading>
      <div className="flex flex-row items-center justify-center">
        <ButtonGroup>
          <Button
            onClick={() => setStep(1)}
            leftIcon={step === 1 && <FaCheck />}
            color={step === 1 ? "primary" : "default"}
          >
            Primeira Rodada
          </Button>
          <Button
            onClick={() => setStep(2)}
            leftIcon={step === 2 && <FaCheck />}
            color={step === 2 ? "primary" : "default"}
          >
            Segunda Rodada
          </Button>
          <Button
            onClick={() => setStep(3)}
            leftIcon={step === 3 && <FaCheck />}
            color={step === 3 ? "primary" : "default"}
          >
            Terceira Rodada
          </Button>
          <Button
            onClick={() => setStep(4)}
            leftIcon={step === 4 && <FaCheck />}
            color={step === 4 ? "primary" : "default"}
          >
            Oitavas de Final
          </Button>
          <Button
            onClick={() => setStep(5)}
            leftIcon={step === 5 && <FaCheck />}
            color={step === 5 ? "primary" : "default"}
          >
            Quartas de Final
          </Button>
          <Button
            onClick={() => setStep(6)}
            leftIcon={step === 6 && <FaCheck />}
            color={step === 6 ? "primary" : "default"}
          >
            Semi-Finais
          </Button>
          <Button
            onClick={() => setStep(7)}
            leftIcon={step === 7 && <FaCheck />}
            color={step === 7 ? "primary" : "default"}
          >
            Final
          </Button>
        </ButtonGroup>
      </div>
      <div className="grid grid-cols-2 gap-x-8 justify-center w-full items-center ">
        {GROUPS.map((group) => (
          <div className="w-full flex flex-col gap-2 mt-4">
            <span className="font-semibold text-default-100 mt-4 flex">Grupo {group}</span>
            <div className="grid grid-cols-2 gap-1">
              {gamesByGroup(group).map((game: Game) => (
                <CardJogo game={game} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
