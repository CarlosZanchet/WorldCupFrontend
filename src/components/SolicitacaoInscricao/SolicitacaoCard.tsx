import { Avatar, Button, useToast } from "coheza-ui";
import { useRequests } from "../../context/RequestContext";
import { Request } from "../../entities/Request";
import { acceptRequest, denyRequest } from "../../services/RequestService";

interface RequestProsp {
  request: Request;
}

export function SolicitacaoCard({ request }: RequestProsp) {

  const { showNotification } = useToast();
  const { removeRequest } = useRequests();

  function handleAceitar() {
    acceptRequest(request.id).then(() => {
      showNotification('success', `${request.user_request.name} incluso no bolão ${request.bolao.name}`, 'Sucesso!');
      removeRequest(request.id)
    }).catch(() => {
      showNotification('danger', `Houve um erro ao negar a solicitação`);
    })
  }

  function handleNegar() {
    denyRequest(request.id).then(() => {
      showNotification('success', `Solicitação de ${request.user_request.name} negada.`);
      removeRequest(request.id)
    }).catch(() => {
      showNotification('danger', `Houve um erro ao aceitar a solicitação`);
    })
  }

  return (
    <div className="flex flex-col gap-2 ring-1 ring-secondary-600 ring-opacity-25 rounded-xl px-2 pb-2">
      <span className="w-full text-center text-secondary-600 text-xxs">
        Nova Solicitação
      </span>
      <div className="flex items-center gap-2">
        {request.bolao.url_image ? <Avatar size="xs" urlImage={request.bolao.url_image} /> : <Avatar size="xs" label={request.bolao.name} />}
        <div className="flex flex-col">
          <span className="text-default-100 text-xs">
            {request.user_request.name}
          </span>
          <strong className="text-default-100 text-xs">
            {request.bolao.name}
          </strong>
        </div>
      </div>
      <div className="flex gap-2">
        <Button onClick={handleAceitar} size="xxs" fullWidth color="primary">
          Aceitar
        </Button>
        <Button onClick={handleNegar} size="xxs" fullWidth color="secondary">
          Recusar
        </Button>
      </div>
    </div>
  );
}
