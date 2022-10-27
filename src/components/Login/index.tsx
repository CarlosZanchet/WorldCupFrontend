import { Box, Button, Text, TextField, useToast } from "coheza-ui";
import { FaCheck, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Login() {

  const { showNotification } = useToast();
  const navigate = useNavigate();

  function handleLogin() {
    //showNotification('danger', 'Usuário ou senha incorretas.')
    navigate('/')
  }


  return (
    <div className="w-full h-screen bg-default-900 flex items-center justify-center">
      <Box className="w-full  p-8 max-w-xs">
        <Text className="mb-4 flex" size="sm">
          Title
        </Text>

        <form className="flex gap-6 flex-col mt-12">
          <div className="flex gap-5 flex-col">
            <TextField icon={<FaUser />} size="lg" placeholder="Usuário" />
            <TextField icon={<FaLock />} size="lg" placeholder="Senha" type="password" />
          </div>

          <Button onClick={handleLogin} color="primary" size="lg" leftIcon={<FaCheck />}>Entrar</Button>
          <div className="flex flex-col mt-6 items-center justify-center">
            <Text size="xs">Não possui conta?</Text> <Button onClick={() => navigate('/create-account')} size="sm" variant="text" color="primary">Crie uma agora</Button>
          </div>
        </form>
      </Box>
    </div>
  );
}
