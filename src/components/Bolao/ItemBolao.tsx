import { FaQuestion, FaCheck } from "react-icons/fa";
import { Avatar, Button, Span, Text } from "coheza-ui";
import { Bolao } from "../../entities/Bolao";
import { dateFormat } from "../../utils/FormatUtils";
import { getUsuarioLogadoCookie } from "../../utils/CookiesUtil";

interface ItemBolao {
  bolao: Bolao;
  signIn: (bolao: Bolao) => void;
  requestSignIn: (bolao: Bolao) => void;
}

export function ItemBolao({ bolao, signIn, requestSignIn }: ItemBolao) {
  function userRegistred(): boolean {
    const idUser = getUsuarioLogadoCookie();
    const userFind = bolao.users.find((user) => user.id === idUser.id);
    return userFind ? false : true;
  }

  const userLogged = getUsuarioLogadoCookie();

  return (
    <div className="flex justify-between items-center bg-default-800 px-4 py-2 w-full border-default-700 border-b-[1px] border-opacity-40 ">
      <div className="flex gap-2 justify-between">
        {bolao.url_image ? (
          <Avatar urlImage={bolao.url_image} />
        ) : (
          <Avatar label={bolao.name} />
        )}
        <div className="flex gap-10">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <Text>{bolao.name}</Text>
              <Span
                size="xs"
                type={bolao.type === "private" ? "danger" : "success"}
              >
                {bolao.type === "private" ? "Privado" : "Público"}
              </Span>
            </div>
            <Text size="xs">Criado em: {dateFormat(bolao.created_at)}</Text>
          </div>
          <div className="flex flex-col">
            <Text>Administrador</Text>
            <Text size="xs">{bolao.user_create?.name}</Text>
          </div>
        </div>
        <div className="flex flex-col">
          <Text>Participantes</Text>
          <Text size="xs">{bolao.users.length}</Text>
        </div>
      </div>
      {userLogged.id === bolao.user_create.id ? (
        <Span icon type="success">
          Administrador
        </Span>
      ) : (
        <>
          {userRegistred() ? (
            <>
              {bolao.type === "private" ? (
                <Button
                  leftIcon={<FaQuestion />}
                  size="xs"
                  variant="text"
                  color="secondary"
                  onClick={() => requestSignIn(bolao)}
                >
                  Solicitar Entrada
                </Button>
              ) : (
                <Button
                  onClick={() => signIn(bolao)}
                  leftIcon={<FaCheck />}
                  size="xs"
                  variant="text"
                  color="primary"
                >
                  Entrar
                </Button>
              )}
            </>
          ) : (
            <Span icon type="success">
              Já Inscrito
            </Span>
          )}
        </>
      )}
    </div>
  );
}
