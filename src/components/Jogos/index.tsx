import { Button, ButtonGroup, Heading, useToast } from "coheza-ui";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Game } from "../../entities/Game";
import { Result } from "../../entities/Result";
import { Steps } from "../../entities/Steps";
import { getResultByUserAndStep } from "../../services/ResultService";
import { getStepsActive } from "../../services/StepsService";
import { CardJogo } from "./CardJogo";
import { CardJogoFinalizado } from "./CardJogoFinalizado";

const GROUPS: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];

export function Jogos() {
  const { showNotification } = useToast();

  const [step, setStep] = useState(1);
  const [results, setResults] = useState<Result[]>([]);
  const [steps, setSteps] = useState<Steps[]>([]);

  useEffect(() => {
    getStepsActive().then((response) => {
      setSteps(response.data);
    });
  }, []);

  useEffect(() => {
    setResults([]);
    getResultByUserAndStep(step.toString())
      .then((response) => {
        setResults(response.data);
      })
      .catch(() => {
        showNotification("danger", "Houve um erro ao carregar os jogos!");
      });
  }, [step]);

  function gamesByGroup(group: string) {
    return results.filter((result) => result.game.group_team === group);
  }

  return (
    <>
      <Heading>Jogos</Heading>
      <div className="flex flex-row items-center justify-center">
        <ButtonGroup>
          {steps.map((s) => (
            <Button
              key={s.id}
              onClick={() => setStep(s.step)}
              leftIcon={step === s.step && <FaCheck />}
              color={step === s.step ? "primary" : "default"}
            >
              {s.name}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      {step === 1 || step === 2 || step === 3 ? (
        <div className="grid grid-cols-2 gap-x-8 justify-center w-full items-center ">
          {GROUPS.map((group) => (
            <div className="w-full flex flex-col gap-2 mt-4">
              <span className="font-semibold text-default-100 mt-4 flex">
                Grupo {group}
              </span>
              <div className="grid grid-cols-2 gap-1">
                {gamesByGroup(group).map((result: Result) => (
                  <>
                    {result.game.home_score && result.game.outside_score ? (
                      <CardJogoFinalizado result={result} />
                    ) : (
                      <CardJogo result={result} />
                    )}
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          {results.map((result: Result) => (
            <>
              {result.game.home_score && result.game.outside_score ? (
                <CardJogoFinalizado result={result} />
              ) : (
                <CardJogo result={result} />
              )}
            </>
          ))}
        </div>
      )}
    </>
  );
}
