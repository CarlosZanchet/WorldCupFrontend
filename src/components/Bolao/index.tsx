import { Button, Heading, TextField } from "coheza-ui";
import { HiSearch, HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { clans } from "../utils/ClanUtins";
import { ItemCla } from "./ItemCla";

export function ListBolao() {

  const navigate = useNavigate();

  return (
    <>
      <Heading>Bolão</Heading>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-5 items-center">
          <TextField placeholder="Buscar Clã" size="sm" />
          <Button color="primary" leftIcon={<HiSearch />} size="sm">
            Buscar
          </Button>
        </div>
        <Button onClick={() => navigate('/create-bolao')} color="primary" leftIcon={<HiPlus />} size="xs">
          Novo Bolão
        </Button>
      </div>
      <div className="flex gap-2 flex-col mt-8 ">
        {clans.map(cla => (
          <ItemCla cla={cla} />
        ))}
      </div>
    </>
  );
}
