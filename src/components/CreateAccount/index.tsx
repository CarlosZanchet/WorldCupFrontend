import { Box, Button, Text, TextField, useToast } from "coheza-ui";
import { FaCheck, FaLock, FaTimes, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { User } from "../../entities/User";
import { saveUser } from "../../services/UserService";

export function CreateAccount() {

  const navigate = useNavigate();
  const { showNotification } = useToast();

  function handleCreateUser() {
    const user = new User(null, 'Carlos Zanchet', 'carloszanchet', '1234');

    saveUser(user).then(() => {
      showNotification('success', 'Cadastrado com Sucesso.')
    }).catch((e) => {
      showNotification('danger', e.response.data.message)
    })
  }

  return (
    <div className="w-full  h-screen flex items-center justify-center">
      <Box className="w-full p-10 max-w-sm bg-default-800">
        <Text className="mb-4 flex" size="sm">
          Create Account
        </Text>

        <form className="gap-3 flex mt-12 flex-col">
          <div className="flex flex-col gap-3">
            <TextField size="lg" placeholder="Nome Completo" />
          </div>
          <div className="flex flex-col mt-14 gap-3">
            <TextField size="lg" icon={<FaUserAlt />} placeholder="Usuário" />
            <TextField
              size="lg"
              icon={<FaLock />}
              type="password"
              placeholder="Senha"
            />
            <TextField
              size="lg"
              icon={<FaLock />}
              type="password"
              placeholder="Confirmar Senha"
            />
          </div>
          <footer className="flex flex-col gap-2 mt-6">
            <Button onClick={handleCreateUser} size="lg" color="primary" leftIcon={<FaCheck />} fullWidth>
              Inscrever-se
            </Button>
            <Button
              size="xs"
              variant="text"
              color="secondary"
              leftIcon={<FaTimes />}
              fullWidth
              onClick={() => navigate('/login')}
            >
              Cancelar
            </Button>
          </footer>
        </form>
      </Box>
    </div>
  );
}
