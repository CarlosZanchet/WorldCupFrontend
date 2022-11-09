import { Button, Heading, TextField, useToast } from "coheza-ui";
import { useEffect, useState } from "react";
import { HiSearch, HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Bolao } from "../../entities/Bolao";
import { getBoloes, getBoloesByUser, requestSignIn, saveBolao, signInBolao } from "../../services/BolaoService";
import { getUsuarioLogadoCookie } from "../../utils/CookiesUtil";
import { ItemBolao } from "./ItemBolao";

export function ListBolao() {
  const navigate = useNavigate();
  const { showNotification } = useToast();

  const [boloes, setBoloes] = useState<Bolao[]>([]);

  useEffect(() => {
    getBoloes().then((response) => {
      setBoloes(response.data);
      console.log(response.data);
    });
  }, []);

  function signIn(bolao: Bolao) {
    const userLogged = getUsuarioLogadoCookie();

    if (userLogged.id && bolao.id) {
      signInBolao(userLogged.id, bolao.id).then(() => {
        showNotification("success", "Inscrição efetuada com sucesso.");
      }).catch((err) => {
        showNotification("danger", err.response.data.message)
      });
    }
  }

  function handleRequestSignIn(bolao: Bolao) {
    requestSignIn(bolao).then(() => {
      showNotification("success", "Solicitação enviada com sucesso.");
    }).catch((err) => {
      showNotification("danger", err.response.data.message)
    });
  }

  return (
    <>
      <Heading>Bolão</Heading>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-5 items-center">
          <TextField placeholder="Buscar Bolão" size="sm" />
          <Button color="primary" leftIcon={<HiSearch />} size="sm">
            Buscar
          </Button>
        </div>
        <Button
          onClick={() => navigate("/create-bolao")}
          color="primary"
          leftIcon={<HiPlus />}
          size="xs"
        >
          Novo Bolão
        </Button>
      </div>
      <div className="flex gap-2 flex-col mt-8 ">
        {boloes.map((bolao) => (
          <ItemBolao bolao={bolao} signIn={signIn} requestSignIn={handleRequestSignIn}  />
        ))}
      </div>
    </>
  );
}
