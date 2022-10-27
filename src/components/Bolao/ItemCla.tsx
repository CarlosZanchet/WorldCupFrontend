import { FaQuestion, FaCheck } from "react-icons/fa";
import { Avatar, Button, Span, Text } from "coheza-ui";
import { Cla } from "../../entities/Cla";

interface ItemCla {
  cla: Cla;
}

export function ItemCla({ cla }: ItemCla) {
  return (
    <div className="flex justify-between items-center bg-default-800 px-4 py-2 w-full border-default-700 border-b-[1px] border-opacity-40 ">
      <div className="flex gap-2 ">
        <Avatar label={cla.name} />
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <Text>{cla.name}</Text>
            <Span size="xs" type={cla.type === 'private' ? 'danger' : 'success'}>
              {cla.type === "private" ? "Privado" : "Público"}
            </Span>
          </div>
          <Text size="xs">Criado em: 10/10/2022</Text>
        </div>
      </div>
      {cla.type === "private" ? (
        <Button leftIcon={<FaQuestion/>} size="xs" variant="text" color="secondary">Solicitar Entrada</Button>
      ) : (
        <Button leftIcon={<FaCheck/>} size="xs" variant="text" color="primary">Entrar</Button>
      )}
    </div>
  );
}
