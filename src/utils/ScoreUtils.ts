import { Game } from "../entities/Game";
import { Result } from "../entities/Result";
import { User } from "../entities/User";

export function calculo(result: Result, game: Game | null): number {
  const PONTOS_ACERTO = 10;
  const PONTOS_RESULTADO = 5;

  if (game) {
    const palpiteCasa: number | null = result.home_result
      ? parseInt(result.home_result.toString())
      : null;
    const palpiteFora: number | null = result.outside_result
      ? parseInt(result.outside_result.toString())
      : null;

    const placarCasa: number | null = game.home_score
      ? Number(game.home_score)
      : null;
    const placarFora: number | null = game.outside_score
      ? Number(game.outside_score)
      : null;

    if (palpiteCasa && palpiteFora && placarCasa && placarFora) {
      if (!palpiteCasa || !palpiteFora) {
        return 0;
      }

      if (!placarCasa || !placarFora) {
        return 0;
      }

      //ACERTO TOTAL
      if (palpiteCasa === placarCasa && palpiteFora === placarFora) {
        return PONTOS_ACERTO;
      }

      //ACERTO DO RESULTADO VITORIA DE CASA
      if (palpiteCasa > palpiteFora && placarCasa > placarFora) {
        return PONTOS_RESULTADO;
      }

      //ACERTO DO RESULTADO VITORIA DE FORA
      if (palpiteCasa < palpiteFora && placarCasa < placarFora) {
        return PONTOS_RESULTADO;
      }

      //EMPATE DIFERENTE DO ENPATE DO PALPITE
      if (palpiteCasa === palpiteFora && placarCasa === placarFora) {
        return PONTOS_RESULTADO;
      }
    }
    return 0;
  }
  return 0;
}

export function scoreByUser(user: User): number {
  const valores = user.results.map((res) => {
    const game = res.game;
    return calculo(res, game);
  });

  return valores.reduce((sum, val) => sum + val, 0);
}
