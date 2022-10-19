import { Button } from "../Form/Button";
import { Input } from "../Form/Input";
import { HiSearch, HiPlus } from "react-icons/hi";
import { clans } from "../utils/ClanUtins";
import { ItemCla } from "./ItemCla";

export function ListClan() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <Input placeholder="Buscar Clã" />
          <Button color="primary" leftIcon={<HiSearch />} size="sm">
            Buscar
          </Button>
        </div>
        <Button color="primary" leftIcon={<HiPlus />} size="sm">
          Novo Clã
        </Button>
      </div>
      <div className="flex gap-4 flex-col mt-8">
        {clans.map(cla => (
          <ItemCla cla={cla} />
        ))}
      </div>
    </>
  );
}
