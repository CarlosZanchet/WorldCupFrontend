import { Button, TextField } from "coheza-ui";
import { HiSearch, HiPlus } from "react-icons/hi";
import { clans } from "../utils/ClanUtins";
import { ItemCla } from "./ItemCla";

export function ListClan() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <TextField placeholder="Buscar Clã" size="sm" />
          <Button color="primary" leftIcon={<HiSearch />} size="sm">
            Buscar
          </Button>
        </div>
        <Button color="primary" leftIcon={<HiPlus />} size="xs">
          Novo Clã
        </Button>
      </div>
      <div className="flex gap-2 flex-col mt-8">
        {clans.map(cla => (
          <ItemCla cla={cla} />
        ))}
      </div>
    </>
  );
}
