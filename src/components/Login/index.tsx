import { Box, Button, Text, TextField, useToast } from "coheza-ui";
import { FaCheck, FaLock, FaUser } from "react-icons/fa";

export function Login() {

  const { showNotification } = useToast()

  function handleLogin() {
    showNotification('danger', 'Usuário ou senha incorretas.')
  }

  return (
    <div className="w-full h-screen bg-default-900 flex items-center justify-center">
      <Box className="w-full max-w-xs">
        <Text className="mb-4 flex" size="sm">
          Title
        </Text>

        <form className="flex gap-6 flex-col">
          <div className="flex gap-2 flex-col">
            <TextField icon={<FaUser />} size="lg" placeholder="Usuário" />
            <TextField icon={<FaLock />} size="lg" placeholder="Senha" type="password" />
          </div>

          <Button onClick={handleLogin} color="primary" size="lg" leftIcon={<FaCheck />}>Entrar</Button>
        </form>
      </Box>
    </div>
  );
}
