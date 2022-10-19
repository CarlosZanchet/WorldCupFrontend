import clsx from "clsx";
import { Cla } from "../../entities/Cla";
import { Button } from "../Form/Button";

interface ItemCla {
  cla: Cla;
}

export function ItemCla({ cla }: ItemCla) {
  return (
    <div className="flex justify-between items-center bg-white p-4 w-full rounded">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-300">CZ</div>
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <span className="text-md">{cla.name}</span>
            <span
              className={clsx(
                "text-[0.75rem] text-gray-100 font-bold px-2 rounded-md ",
                {
                  "bg-[#e74c3c] text-gray-50": cla.type === "private",
                  "bg-[#31A65A] text-gray-50": cla.type === "public",
                }
              )}
            >
              {cla.type === "private" ? "Privado" : "Público"}
            </span>
          </div>
          <strong className="text-[0.65rem]">
            Criado em: {cla.createdAt.toString()}
          </strong>
        </div>
      </div>
      {cla.type === "private" ? (
        <Button size="xs" color="secondary">Solicitar Entrada</Button>
      ) : (
        <Button size="xs"  color="secondary">Entrar</Button>
      )}
    </div>
  );
}
