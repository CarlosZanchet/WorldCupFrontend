import { Box, Button, Text, TextField, useToast } from "coheza-ui";
import { useEffect, useState } from "react";
import { FaCheck, FaLock, FaUser } from "react-icons/fa";
import logocup from "../../assets/logo2.png";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { authLogin } from "../../services/AuthService";
import { getTokenCookie, removeAllCookies, setTokenCookie, setUsuarioLogadoCookie } from "../../utils/CookiesUtil";

export function Login() {
  const { showNotification } = useToast();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = getTokenCookie();
    if(token) {
      navigate('/dashboard')
    }
  }, [])

  function handleLogin() {
    authLogin(username, password).then((response) => {
      setTokenCookie(response.data.token);
      setUsuarioLogadoCookie(response.data.user);
      navigate('/dashboard')

    }).catch((e) => {
      if(e.response.status === 400) {
        showNotification('danger', 'Usuário ou senha incorretos.')
      } else {
        showNotification('danger', 'Erro interno.')
      }
    });
  }

  return (
    <div className="w-full h-screen bg-default-900 flex items-center justify-center">
      <Box className="w-full flex flex-col items-center  p-8 max-w-xs">
        <img width={150} src={logocup} alt="cuplogo" />

        <form className="flex gap-6 flex-col mt-12">
          <div className="flex gap-5 flex-col">
            <TextField onChange={(event) => setUsername(event.target.value)} icon={<FaUser />} size="lg" placeholder="Usuário" />
            <TextField onChange={(event) => setPassword(event.target.value)} icon={<FaLock />} size="lg" placeholder="Senha" type="password" />
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
