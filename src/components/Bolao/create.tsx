import { Button, ButtonGroup, Heading, TextField, useToast } from "coheza-ui";
import { FaCheck } from "react-icons/fa";
import { MdPublic } from 'react-icons/md'
import { MdLock } from 'react-icons/md'

export function CreateBolao() {

  const { showNotification } = useToast();

  function handleSalvar() {
    showNotification('success', 'Bolão salvo com sucesso.')
  }

  return (
    <div>
      <Heading>Cadastrar Bolão</Heading>
      <div className="mt-5">
        <form className="flex flex-col gap-4">
          <TextField placeholder="Nome do Bolão" label="Nome do Bolão" />
          <TextField placeholder="URL Imagem Bolão" label="URL Imagem Bolão" />
          <ButtonGroup>
            <Button leftIcon={<MdLock />}>Privado</Button>
            <Button leftIcon={<MdPublic />}>Público</Button>
          </ButtonGroup>
          <footer>
            <Button onClick={handleSalvar} leftIcon={<FaCheck />} color="primary">Salvar</Button>
          </footer>
        </form>
      </div>
    </div>
  )
}