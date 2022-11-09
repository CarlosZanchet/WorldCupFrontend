import { NavLink } from "./NavLink";
import { FaUserFriends } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import { MdDashboard, MdOutlineLogout } from "react-icons/md";
import { Avatar, Box } from "coheza-ui";
import Logo from "../../assets/logo-branca.png";
import { useLogin } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { getUsuarioLogadoCookie } from "../../utils/CookiesUtil";
import { SolicitacaoCard } from "../SolicitacaoInscricao/SolicitacaoCard";
import { useEffect } from "react";
import { useRequests } from "../../context/RequestContext";

export function Nav() {
  const { logout } = useLogin();
  const navigate = useNavigate();

  const userLogado = getUsuarioLogadoCookie();

  const { findRequest, requests } = useRequests();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  useEffect(() => {
    findRequest();
  }, [])

  return (
    <nav className="w-full max-w-[250px] h-screen">
      <Box className="h-[97vh] w-full mt-4 flex flex-col gap-10 items-center">
        <div className="">
          <img src={Logo} width={150} alt="Logo" />
        </div>

        <div className="flex flex-row gap-2 ring-1 ring-default-700 ring-opacity-25 rounded-3xl p-3">
          <Avatar size="xs" />
          <div className="flex flex-col">
            <span className="text-default-100 text-sm">
              <strong>Olá, </strong>
              {userLogado.name}
            </span>
            <span className="text-default-100 text-[0.7rem]">
              carlos.zanchet
            </span>
          </div>
        </div>
        <div className="flex  w-full flex-col justify-between h-full">
          <div className="flex flex-col gap-2">
            <NavLink path="/dashboard" icon={<MdDashboard />}>
              Dashboard
            </NavLink>
            <NavLink path="/bolao" icon={<FaUserFriends />}>
              Bolão
            </NavLink>
            <NavLink path="/games" icon={<GiSoccerBall />}>
              Jogos
            </NavLink>
          </div>
          <div className="h-96 overflow-auto flex flex-col gap-2 p-1">
            {
              requests.map((req) => {
               return  <SolicitacaoCard request={req} />
              })
            }
          </div>
          <button
            onClick={handleLogout}
            className="text-[#c54b48] flex flex-row items-center justify-center transition-colors gap-3 hover:bg-opacity-10 px-6 py-3 rounded hover:bg-[#c54b48] "
          >
            <MdOutlineLogout />
            Sair
          </button>
        </div>
      </Box>
    </nav>
  );
}
